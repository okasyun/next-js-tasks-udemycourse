import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { TaskModel } from "@/models/task";

export const GET = async (
  _: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDB();
    const task = await TaskModel.findById(params.id);
    if (!task) {
      return NextResponse.json(
        { message: "タスクが存在しません" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "タスク取得成功", task });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "タスク取得失敗", error },
      { status: 500 }
    );
  }
};

export const dynamic = "force-dynamic";
