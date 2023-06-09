const Student = require("../models/Student");

exports.getAllData = async (req, res, next) => {
  console.log("get All data");
  const data = await Student.find({});
  if (data) {
    res.status(200);
    res.json(data);
  } else {
    res.status(500);
    res.json({ msg: "Error on sever in fetching data" });
  }
};

exports.insertData = async (req, res, next) => {
  console.log("insert data");
    const { name, address, city, country, pincode, sat } = req.body;
    console.log(name,address,city,country,pincode,sat);
  if (!name || !address || !city || !country || !pincode || !sat) {
    res.status(300);
    res.json({ msg: "All feild are not povided" });
    return;
  }
    const isPassed = +sat > 30;
    const lowername = name.toLowerCase();
  const student = await Student.create({
      name: lowername,
    address,
    city,
    country,
    pincode,
    satscore:sat,
    passed: isPassed,
  });

  if (student) {
    res.status(201).json({ msg: "student created", student: student });
  } else {
    res.status(500);
    res.json({ msg: "Error on sever in adding data" });
  }
};

exports.updateData = async (req, res, next) => {
    const { name, sat } = req.body;
    console.log(name,sat);
  if (!name || !sat) {
    res.status(300);
    res.json({ msg: "All feild are not povided" });
    return;
  }
    const lowername = name.toLowerCase();
  const student = await Student.findOne({ name: lowername });
  if (!student) {
    res.status(300);
    res.json({ msg: "use not found" });
    return;
  } else {
    const isPassed = +sat > 30;
    const updateStudent = await Student.findOneAndUpdate(
      { name: lowername },
      {
        $set: { satscore: sat, passed: isPassed },
      },
      {
        new: true,
      }
    );
    if (updateStudent) {
      res.status(201);
      res.json({ message: "updated !!", updateStudent });
    } else {
      res.status(401);
      res.json({ message: "error is updating post" });
    }
  }
};

exports.deleteData = async (req, res, next) => {
  const { name } = req.body;
  if (!name ) {
    res.status(300);
    res.json({ msg: "All feild are not povided" });
    return;
  }

    try {
       const lowername = name.toLowerCase();
    const student = await Student.findOneAndDelete({ name:lowername });
    if (student) {
      res.status(201);
      res.json({ message: "deleted !!", student });
    } else {
      res.status(401);
      res.json({ message: "user not found" });
    }
  } catch (error) {
    res.status(501);
    res.json({ message: "error is deleted post" });
  }
};


exports.getRank = async (req, res, next) => {
    
    const { name } = req.params;
    console.log(name);
  if (!name ) {
    res.status(300);
    res.json({ msg: "All feild are not povided" });
    return;
    }
    
      try {
       const lowername = name.toLowerCase();
          const students = await Student.find({}).sort({satscore:-1});
    if (students) {
        res.status(201);
     //   console.log(students);
        const rank = students.findIndex((item) => item.name === lowername);
        console.log(rank+1);
      res.json({ name: students[rank].name, rank:rank+1  });
    } else {
      res.status(401);
      res.json({ message: "error occured" });
    }
  } catch (error) {
    res.status(501);
    res.json({ message: "error in fetching rank" });
  }
}


