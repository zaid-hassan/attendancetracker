const title = document.querySelector(".title");
const totalClasses = document.querySelector("#totalClasses");
const attendedClasses = document.querySelector("#attendedClasses");
const button = document.querySelector(".button");
const result = document.querySelector(".result");
const pieChart = document.querySelector("#myChart");

const calculateAttendace = () =>
    (attendedClasses.value / totalClasses.value) * 100;

button.onclick = (e) => {
    const attendancePercentage = calculateAttendace();

    if (attendancePercentage < 75) {
        result.innerText = `You need to attend more classes. Your attendance is ${attendancePercentage}%.`;
    } else if (attendancePercentage === 75) {
        result.innerText = `Pheww!! Your attendance is exactly ${attendancePercentage}%. You are safe.`;
    } else {
        result.innerText = `Your made it!!! Your attendance is ${attendancePercentage}%.`;
    }
};