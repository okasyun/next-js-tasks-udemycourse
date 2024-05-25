import connectDB from "@/app/utils/database";
import { TaskDocument, TaskModel } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const allTasks: TaskDocument[] = await TaskModel.find();

    return NextResponse.json({ message: "タスク取得成功", tasks: allTasks });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "タスク取得失敗", error },
      { status: 500 }
    );
  }
};

export const dynamic = "force-dynamic";
