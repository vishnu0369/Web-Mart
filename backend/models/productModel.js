import mongoose from "mongoose";
// only admins can create the product and which user created which producted is noted

const reviewSchema = mongoose.Schema({
    name: {type: String, require: true},
    rating: {type: Number, require: true},
    comment: {type: String, require: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User' 
    },
}, {
    timestamps: true,
})


const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'  // establish a relationship b/w product and user 
    },
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        require: true,
        default: 0
    },
    numReviews: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        default: 0
    },
    countInStock: {
        type: Number,
        require: true,
        default: 0
    },
},{
    timestamps: true
})


const Products = mongoose.model('Product',productSchema);

export default Products;