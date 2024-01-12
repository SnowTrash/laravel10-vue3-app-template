import service from "./service";

async function login(credentials) {
    await service.get("/sanctum/csrf-cookie");

    return await service.post("/login", credentials);
}

const user = async () => {
    return await service.get("/user");
};

const logout = async () => {
    return await service.post("/logout");
};

export default { login, user, logout };
