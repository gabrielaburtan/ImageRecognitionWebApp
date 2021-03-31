import * as jwt from "jsonwebtoken";

import { User } from "../entity/User";

type jwtType = {expiresIn : number, token : string};

export class jwtToken {

  static secret = "9zL6Ief9L0S71wX";

  public static createToken(user: User): jwtType {
    const expiresIn = 60 * 60; // an hour
    const dataStoredInToken = {
      email: user.email,
    };
    return {
      expiresIn,
      token: jwt.sign(dataStoredInToken, jwtToken.secret, { expiresIn: expiresIn }),
    };
  }

  public static createCookie(tokenData : any) {
    return `Authorization=${tokenData.token}; HttpOnly; Path=/; Max-Age=${tokenData.expiresIn}`;
  }
}