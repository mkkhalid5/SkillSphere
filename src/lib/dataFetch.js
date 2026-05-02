export async function allCourses() {
    const res = await fetch("https://courses.mkkhalid.top/courses");
    const data = await res.json();
    return data;
}

export async function getCourseDetailsByID(id) {
    const res = await fetch(`https://courses.mkkhalid.top/courses/${id}`);
    const data = await res.json();
    return data;
    
}