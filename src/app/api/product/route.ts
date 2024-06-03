import { NextRequest, NextResponse } from "next/server";
import { title } from "process";

const data = [
  {
    id: 1,
    title: "Sepatu Baru",
    Price: 100000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32090ca9-d8ef-4943-aa41-4f23dc0777af/air-jordan-4-retro-oxidised-green-shoes.png"  ,
  },
  {
    id: 2,
    title: "Sepatu Jordan",
    Price: 50000,
    image:  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32090ca9-d8ef-4943-aa41-4f23dc0777af/air-jordan-4-retro-oxidised-green-shoes.png" ,
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }
  return NextResponse.json({ status: 200, message: "Success", data });
}
