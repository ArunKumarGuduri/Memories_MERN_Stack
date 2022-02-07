
import mongoose from "mongoose";
import PostMessage from "../models/postMessages.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
export const updatePost = async (req, res) => {
    // renaming id
    const { id: _id } = req.params;
    const post = req.body

    // if no post id found return error
    if (!mongoose.Types.ObjectId.isValid(_id)) res.status(404).send('No posts with that id');

    // else
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
    res.json(updatePost);

}