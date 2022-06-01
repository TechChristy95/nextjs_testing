import type { NextApiRequest, NextApiResponse } from "next"

type Data = {}




export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    var content= await import("../../src/json/home/home.json");
    res.status(200).json(content)
}