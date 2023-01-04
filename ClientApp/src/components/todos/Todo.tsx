import { ChangeEvent, useEffect, useState } from "react";
import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";
import axios from "axios";

// TodoItemの型宣言
export type TodoItem = {
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

  // テキストボックスの文字列を管理するstate
  const [text, setText] = useState("");

  // テキストボックス入力時の処理
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    // テキストボックスの文字列をstateにセット
    setText(e.target.value);
  };

  // 追加ボタンクリック時の処理
  const handleAdd = async () => {
    // 新しいTodoアイテムのオブジェクトを作成（idはDB側で自動採番するため省略）
    const newTodo = { name: text, isComplete: false };

    try {
      // APIにPOSTリクエストし、レスポンスから登録したTodoアイテムオブジェクトを取り出す
      const { data } = await axios.post("api/todoitems", newTodo);

      // 既存のTodoアイテムと新規登録したTodoアイテムを合体させてstateにセット
      setTodos([...todos, data]);
    } catch (e) {
      console.error(e);
    }
    // テキストボックスをクリア
    setText("");
  };

  // 完了ステータス（チェックボックス）変更時の処理
  const handleChangeStatus = async (id?: number) => {
    // 対象のTodoアイテムの完了フラグを反転して新しい配列に格納
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    // 更新対象のTodoアイテムを取得
    const targetTodo = newTodos.filter((todo) => todo.id === id)[0];

    try {
      // APIに更新対象のTodoアイテムをPUTリクエスト
      await axios.put(`api/todoitems/${id}`, targetTodo);

      // 新しい配列をstateにセット
      setTodos(newTodos);
    } catch (e) {
      console.error(e);
    }
  };

  // 削除ボタンクリック時の処理
  const handleDelete = async (id?: number) => {
    try {
      // APIに削除対象のidをDELETEリクエスト
      await axios.delete(`api/todoitems/${id}`);

      // 削除対象以外のTodoアイテムを抽出してstateにセット
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (e) {
      console.error(e);
    }
  };
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
      <h1>Todo</h1>
      <TodoInput text={text} onChange={handleChangeInput} onClick={handleAdd} />
      <TodoList
        todos={todos}
        onChange={handleChangeStatus}
        onClick={handleDelete}
      />
    </div>
  );
};
