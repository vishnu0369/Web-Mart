import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    orderItems: [
        {
            name: {type: String, require: true},
            qty: {type: Number, require: true},
            image: {type: String, require: true},
            price: {type: Number, require: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                require: true,
                ref: 'Product'
            },
        }
    ],
    shippingAddress: {
        address: {type: String, require: true},
        city: {type: String, require: true},
        postalCode: {type: String, require: true},
        country: {type: String, require: true}, 
    },
    pamentMethod: {
        type: String,
        require: true,
    },
    pamentResult: {
        id: {type: String},
        status: {type: String},
        update_item: {type: String},
        email_address: {type: String},
    },
    taxPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        require: true,
        default: false
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt: {
        type: Date
    }
},{
    timestamps: true
})

const order = mongoose.model('order', orderSchema)

export default order;