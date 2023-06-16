const worldByDefault = "baccara";
const sayWorld = (world = worldByDefault) => {
    console.log("world:", world);
    return world;
};
export default sayWorld;
