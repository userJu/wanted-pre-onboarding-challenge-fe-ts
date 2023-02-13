interface TagData {
  tagId: number;
  tagName: string;
}

// Class representing a TodoItem.
class TodoItem {
  userId: string; // - The id of User.
  content: string; // - The description of todoItem.
  category: string; // - The category of todoItem.
  tags?: TagData[]; // - The tagInfo List of todoItem, this is optional parameter

  // CREATE Methods ...
  constructor(
    userId: string,
    content: string,
    category: string,
    tags: TagData[]
  ) {
    this.userId = userId;
    this.content = content;
    this.category = category;
    this.tags = tags;
  }

  // UPDATE Methods...
  updateContent(content: string) {
    this.content = content;
  }
  updateCategory(category: string) {
    this.category = category;
  }
  updateTag(tagId: number, tagName: string) {
    this.tags = this.tags?.map((tag) =>
      tag.tagId === tagId ? { ...tag, tagName } : tag
    );
  }

  // DELETE Methods...
  deleteTag(tagId: number) {
    this.tags = this.tags?.filter((tag) => tag.tagId !== tagId);
  }
  deleteTagAll() {
    this.tags = undefined;
  }

  // READ Methods...
  render(parentNode: HTMLElement) {
    parentNode.innerHTML = `
      <li>${(this.userId, this.category, this.content, this.tags)}</li>
    `;
  }
}

interface TodoItemData {
  id: number;
  todoItem: TodoItem;
}

class TodoList {
  todoListData: TodoItemData[];

  constructor() {
    this.todoListData = []; // todoList []로 초기화
  }

  // CREATE Methods...
  addTodoItem(
    userId: string,
    content: string,
    category: string,
    tags?: TagData[]
  ) {
    this.todoListData = [
      ...this.todoListData,
      {
        id: this.todoListData.length + 1,
        todoItem: new TodoItem(userId, content, category, tags),
        // error
        // Argument of type 'TagData[] | undefined' is not assignable to parameter of type
        // 'TagData[]'. Type 'undefined' is not assignable to type 'TagData[]'.
      },
    ];
  }

  // DELETE Methods...
  deleteTodoItem(userId: string, todoId: number) {
    this.todoListData = this.todoListData.filter(
      (todo) => todo.id !== todoId && todo.todoItem.userId !== userId
    );
  }

  deleteTodoList(userId: string) {
    this.todoListData = this.todoListData.filter(
      (todo) => todo.todoItem.userId !== userId
    );
  }

  // READ Methods...
  filterTodoListByUser(userId: string): TodoItemData[] {
    const filteredTodoList = this.todoListData.filter(
      (todo) => todo.todoItem.userId === userId
    );
    return filteredTodoList;
  }

  render() {
    // ...
  }
}
