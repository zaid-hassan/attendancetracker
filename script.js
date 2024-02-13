const title = document.querySelector(".title");
const totalClasses = document.querySelector("#totalClasses");
const attendedClasses = document.querySelector("#attendedClasses");
const button = document.querySelector(".button");
const result = document.querySelector(".result");
const pieChart = document.querySelector("#myChart");

window.onload = e => {
    title.style.animation = "textGlow 1s ease-in-out";
}
const calculateAttendance = () =>
    (attendedClasses.value / totalClasses.value) * 100;

button.onclick = (e) => {
    const attendancePercentage = calculateAttendance();

    if (attendancePercentage < 75) {
        result.innerText = `You need to attend more classes. Your attendance is ${attendancePercentage}%.`;
    } else if (attendancePercentage === 75) {
        result.innerText = `Pheww!! Your attendance is exactly ${attendancePercentage}%. You are safe.`;
    } else {
        result.innerText = `Your made it!!! Your attendance is ${attendancePercentage}%.`;
    }
};