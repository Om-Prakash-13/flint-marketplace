import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: [true, "Email already exists."],
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        select: false,
        minlength: [8, "Password must be at least 8 characters long."]
    },
    role: {
        type: String,
        enum: ["CUSTOMER", "SELLER", "ADMIN"],
        default: "CUSTOMER",
    },
    isVerified:{
        type: Boolean,
        default: false
    },
},{timestamps: true});


// Hash password before saving
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword){
    return await bcrypt.compare(candidatePassword, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;