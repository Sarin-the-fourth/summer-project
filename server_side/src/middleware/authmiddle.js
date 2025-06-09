import Admin from "../models/adminmodel.js";
import jwt from "jsonwebtoken";

export const is_admin = async (req, res, next) => {   
    try {
        const token = req.cookies.jwt;

        // Condition if there is no token
        if (!token) {
        return res.status(401).json({
            success: false,
            message: "Not authorized - No token provided",
        });
        }

        // ========== Verify a token ===========
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        // Condition if the token cannot be verified
        if (!decode) {
        return res.status(401).json({
            success: false,
            message: "Not authorized - Invalid Token",
        });
        }
        
        // Check if the user is an admin
        const admin = await Admin.findById(decode.id);
        if (!admin) {
            return res.status(403).json({
                success: false,
                message: "Access denied - Admins only",
            });
        }

        // If everything is fine, proceed to the next middleware
        req.admin = admin; // Attach admin info to the request object
        next(); 

    } catch (error) {
        console.error("Error in is_admin middleware:", error);
        return res.status(500).json({
            message: "Internal server error"
        });  
    }

}