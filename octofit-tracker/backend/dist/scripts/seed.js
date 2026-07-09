"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("../models/user"));
const team_1 = __importDefault(require("../models/team"));
const activity_1 = __importDefault(require("../models/activity"));
const leaderboard_1 = __importDefault(require("../models/leaderboard"));
const workout_1 = __importDefault(require("../models/workout"));
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Connected to octofit_db');
        await Promise.all([
            user_1.default.deleteMany({}),
            team_1.default.deleteMany({}),
            activity_1.default.deleteMany({}),
            leaderboard_1.default.deleteMany({}),
            workout_1.default.deleteMany({})
        ]);
        const users = await user_1.default.insertMany([
            { name: 'Maya Chen', email: 'maya@example.com', fitnessGoal: 'Build endurance', streak: 14 },
            { name: 'Liam Ortiz', email: 'liam@example.com', fitnessGoal: 'Increase strength', streak: 8 },
            { name: 'Sofia Patel', email: 'sofia@example.com', fitnessGoal: 'Improve mobility', streak: 11 }
        ]);
        await team_1.default.insertMany([
            { name: 'North Stars', members: users.slice(0, 2).map((user) => user._id.toString()), focus: 'Endurance' },
            { name: 'Peak Squad', members: [users[2]._id.toString()], focus: 'Strength' }
        ]);
        await activity_1.default.insertMany([
            { userId: users[0]._id.toString(), type: 'Run', durationMinutes: 35, calories: 420, date: new Date('2026-07-01') },
            { userId: users[1]._id.toString(), type: 'Cycling', durationMinutes: 50, calories: 610, date: new Date('2026-07-02') },
            { userId: users[2]._id.toString(), type: 'Yoga', durationMinutes: 30, calories: 220, date: new Date('2026-07-03') }
        ]);
        await leaderboard_1.default.insertMany([
            { userId: users[0]._id.toString(), score: 980, rank: 1 },
            { userId: users[2]._id.toString(), score: 915, rank: 2 },
            { userId: users[1]._id.toString(), score: 890, rank: 3 }
        ]);
        await workout_1.default.insertMany([
            { name: 'Tempo Run', difficulty: 'Intermediate', durationMinutes: 40, focus: 'Cardio' },
            { name: 'Upper Body Strength', difficulty: 'Advanced', durationMinutes: 45, focus: 'Strength' },
            { name: 'Core Flow', difficulty: 'Beginner', durationMinutes: 25, focus: 'Mobility' }
        ]);
        console.log('Database seeding complete');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
