import express from 'express';
import { createVote } from '../controllers/voteController';

const router = express.Router();

// Route to create a vote
router.post('/', createVote);

export default router;
