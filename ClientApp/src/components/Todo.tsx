import { useEffect, useState } from "react";
import axios from "axios";

// TodoItemの型宣言
type TodoItem = {
  id?: number;
  name: string;
  isComplete: boolean;
};

// 初期値
const initialValues = [
  {
    id: 1,
    name: "プログラミング",
    isComplete: false,
  },
  {
    id: 2,
    name: "ランニング",
    isComplete: true,
  },
];

export const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>(initialValues);

  // ページ初期表示時の処理
  useEffect(() => {
    // APIからTodoデータを取得する関数を定義
    const fetchTodoData = async () => {
      try {
        // APIにGETリクエストし、レスポンスからTodoアイテムオブジェクトの配列を取り出す
        const { data } = await axios.get("api/todoitems");

        // stateにセット
        setTodos(data);
      } catch (e) {
        console.error(e);
      }
    };
    // 関数の実行
    fetchTodoData();
  }, []);

  return (
    <div>
      <h1>Todoリスト</h1>
      <input type="text" />
      <button>追加</button>
      <ul>
        {/* todoアイテムの配列を展開 */}
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" />
            {/* 完了フラグがtrueの場合は取り消し線を表示 */}
            {todo.isComplete ? (
              <span style={{ textDecorationLine: "line-through" }}>
                {todo.name}
              </span>
            ) : (
              <span>{todo.name}</span>
            )}
            <button>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
