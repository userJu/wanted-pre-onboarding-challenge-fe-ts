"use strict";
// Class representing a TodoItem.
class TodoItem {
    // CREATE Methods ...
    constructor(userId, content, category, tags) {
        this.userId = userId;
        this.content = content;
        this.category = category;
        this.tags = tags;
    }
    // UPDATE Methods...
    updateContent(content) {
        this.content = content;
    }
    updateCategory(category) {
        this.category = category;
    }
    updateTag(tagId, tagName) {
        var _a;
        this.tags = (_a = this.tags) === null || _a === void 0 ? void 0 : _a.map((tag) => tag.tagId === tagId ? Object.assign(Object.assign({}, tag), { tagName }) : tag);
    }
    // DELETE Methods...
    deleteTag(tagId) {
        var _a;
        this.tags = (_a = this.tags) === null || _a === void 0 ? void 0 : _a.filter((tag) => tag.tagId !== tagId);
    }
    deleteTagAll() {
        this.tags = undefined;
    }
    // READ Methods...
    render(parentNode) {
        parentNode.innerHTML = `
      <li>${(this.userId, this.category, this.content, this.tags)}</li>
    `;
    }
}
class TodoList {
    constructor() {
        this.todoListData = []; // todoList []로 초기화
    }
    // CREATE Methods...
    addTodoItem(userId, content, category, tags) {
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
    deleteTodoItem(userId, todoId) {
        this.todoListData = this.todoListData.filter((todo) => todo.id !== todoId && todo.todoItem.userId !== userId);
    }
    deleteTodoList(userId) {
        this.todoListData = this.todoListData.filter((todo) => todo.todoItem.userId !== userId);
    }
    // READ Methods...
    filterTodoListByUser(userId) {
        const filteredTodoList = this.todoListData.filter((todo) => todo.todoItem.userId === userId);
        return filteredTodoList;
    }
    render() {
        // ...
    }
}
