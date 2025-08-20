const student = {
    name: "Sukhesh",
    scores: {
        math: 95,
        science: 34,
        english: 72
    },
    hobbies: ["reading", "cricket"]
};

const {name, scores, hobbies} = student;

const [hobby1, hobby2] = hobbies;

console.log("Student Name:", student.name);
console.log("First Hobby:", hobby1);
console.log("Second Hobby:", hobby2);


Object.entries(scores).forEach(([subject, scores]) => {
    console.log(`${subject}: ${scores}`);
});