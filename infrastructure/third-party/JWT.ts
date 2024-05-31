import jwt from "jsonwebtoken";

export class Jwt {
  private secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  generateToken(payload: object): string {
    return jwt.sign(payload, this.secret, { expiresIn: "1h" });
  }

  verivyToken(token: string): any {
    return jwt.verify(token, this.secret);
  }
}
