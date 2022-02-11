const data = [];
let _id = 1;
/**
 * @desc create user
 */
export const createUser = (req, res) => {
    if (Object.entries(req.body).length <= 0) {
        console.log("no data");
        res.send({ status: "error", msg: "Please provide valid information" });
    }

    req.body._id = _id;
    _id++;
    data.push(req.body);
    res.send({ status: "success", msg: "User data added successfully" });
};

/**
 * @desc get user list
 */
export const userList = (req, res) => {
    if (data.length <= 0) {
        res.send({ status: "error", msg: "No data Found" });
    }
    res.send({ status: "success", response: data });
};

/**
 * @desc delete user list
 */
export const deleteUser = (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.send({ status: "error", msg: "Please provide valid input" });
    }
    const deleteUser = data.filter((item, index) => {
        if (item._id == id) {
            return data.splice(index, 1);
        }
    });
    if (deleteUser.length <= 0) {
        res.send({ status: "error", msg: "User data not found" });
    }
    res.send({ status: "success", msg: "User data deleted" });
};
/**
 * @desc delete user list
 */
export const updateUser = (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.send({ status: "error", msg: "Please provide valid input" });
    }
    const updateUserData = data.filter((item, index) => {
        if (item._id == id) {
            data.splice(index, 1);
            req.body._id = id;
            return data.splice(index, 0, req.body);
        }
    });
    if (updateUserData.length <= 0) {
        res.send({ status: "error", msg: "User data not found" });
    }
    res.send({ status: "success", msg: "User data updated" });
};
