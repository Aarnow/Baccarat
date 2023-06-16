const worldByDefault:string = "baccara";

const sayWorld = (world:string = worldByDefault): string => {
    console.log("world:", world)
    return world
}

export default sayWorld;