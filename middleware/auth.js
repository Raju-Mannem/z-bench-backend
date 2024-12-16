import jwt from "jsonwebtoken";
import {Admin,BenchSales,Consultants} from "../models.js";

const adminAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "secret", (err, decoded) => {
      if (err) {
        res.status(401).send("Unauthorized");
      } else {
        const { _id } = decoded;
        Admin.findById(_id, (err, admin) => {
          if (err) {
            res.status(500).send("Internal Server Error");
          } else {
            req.admin = admin;
            next();
          }
        });
      }
    });
  } else {
    res.status(401).send("Unauthorized");
  } 
};

const benchSalesAuth = (req, res, next) => {    
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, "secret", (err, decoded) => {
            if (err) {
                res.status(401).send("Unauthorized");
            } else {
                const { _id } = decoded;
                BenchSales.findById(_id, (err, benchsales) => {
                    if (err) {
                        res.status(500).send("Internal Server Error");
                    } else {
                        req.benchsales = benchsales;
                        next();
                    }
                });
            }
        });
    }else{
        res.status(401).send("Unauthorized");
    }
};

const consultantAuth = (req, res, next) => {    
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, "secret", (err, decoded) => {
            if (err) {
                res.status(401).send("Unauthorized");
            } else {
                const { _id } = decoded;
                Consultants.findById(_id, (err, consultant) => {
                    if (err) {
                        res.status(500).send("Internal Server Error");
                    } else {
                        req.consultant = consultant;
                        next();
                    }
                });
            }
        });
    }else{
        res.status(401).send("Unauthorized");
    }
};

export {adminAuth,benchSalesAuth,consultantAuth};