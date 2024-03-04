import Comment from '../models/comment.model.js';
import { errorHandler } from "../utils/error.js";


export const createComment = async (req, res, next) => {
    try {
        const { content, postId, userId } = req.body;

        if (userId !== req.user.id) {
            return res.status(403).json({ message: 'You are not authorized to perform this action' });
            
        }

        const newComment = new Comment({
            content,
            postId,
            userId
        });

        await newComment.save();

        res.status(201).json(newComment);
    } catch (error) {
        next(error);
    }
}


export const getPostComments = async (req, res, next) => {
    try {
        const postId = req.params.postId;
        const comments = await Comment.find({ postId }).sort({ createdAt: -1 });
        res.status(200).json(comments);
    } catch (error) {
        next(error);
    }
}

export const likeComment = async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        const userIndex = comment.likes.indexOf(req.user.id);
        if (userIndex === -1) {
            comment.numberOfLikes += 1;
            comment.likes.push(req.user.id);
            
        } else {
            comment.numberOfLikes -= 1;
            comment.likes.splice(userIndex, 1);
        }
        await comment.save();
        res.status(200).json(comment);
    } catch (error) {
        next(error);
    }
}


export const editComment = async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        if (comment.userId !== req.user.id && !req.user.isAdmin) {
            return res.status(403).json({ message: 'You are not authorized to perform this action' });
        }

        const editedComment = await Comment.findByIdAndUpdate(req.params.commentId, { content: req.body.content }, { new: true });
        res.status(200).json(editedComment);
    } catch (error) {
        next(error);
    }
}


export const deleteComment = async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        if (comment.userId !== req.user.id && !req.user.isAdmin) {
            return res.status(403).json({ message: 'You are not authorized to perform this action' });
        }
        await Comment.findByIdAndDelete(req.params.commentId);
        res.status(200).json('Comment deleted successfully');
    } catch (error) {
        next(error);
    }
}