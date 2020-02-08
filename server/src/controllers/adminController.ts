"use strict";

import { Request, Response, NextFunction } from "express";
import express from 'express'
import path from 'path'


export = {
  checkParams: (req: Request, res: Response, next: NextFunction) => {
      const password = req.params.rootpwd;
      if(password === 'effort_thanks_smile') {
          next();
      }else {
          next(Error);
      }
  },
  sendFile: (req: Request, res: Response, next: NextFunction) => {
    res.send(express.static(path.join(__dirname, "client/build")));
  }
};
