## 챌린지 과제 가이드

> 타 수강생의 타이핑 즉 설계 & 모델링을 실제로 구현합니다.

- **디스코드/프론트엔드 챌린지/자유로운-이야기 채널**에서 원하는 Interface 코드를 가져다 사용하세요
- 설계 & 모델링 된 Interface를 실제로 구현하는 챌린지 과제입니다.
- 모든 요구사항은 설계 & 모델링을 기반으로 수행합니다.
- 제출할 저장소 명은 wanted-pre-onboarding-challenge-fe-ts로 생성해주세요. (Public 권한 필요)
  - 이미 1차~2차 과제를 통해 저장소를 생성했다면 별도의 브랜치로 관리하시는 것을 추천합니다.
- 완성한 과제의 저장소 링크를 **디스코드/프론트엔드 챌린지/자유로운-이야기 채널**에 제출해주세요.
- README.md를 꼭 작성해 주세요.
  - 본인에 대한 소개나 프로젝트 소개 등 자유롭게 작성해주시면 됩니다.

## 📝 필수 요구사항

> 타 수강생의 타이핑 즉 설계 & 모델링을 실제로 구현합니다.

- 설계 & 모델링된 TypeScript's Interface를 따라 내부 구현부를 모두 작성한다.
- 동작되지 않더라도 설계 & 모델링을 지키는 것이 원칙이다.
  - 절대로 동작과 구현을 위해 설계 & 모델링 규칙을 어기지 않습니다.
- README.md 혹은 별도의 문서에 어떤 부분의 타입을 고치면 좋은지 피드백과 출처 링크를 남깁니다.
  <br/>
  <br/>
  <br/>

<hr/>
<br/>

## 구현

[leewooseong](https://github.com/leewooseong/wanted-pre-onboarding-challenge-fe-2/blob/interface-modeling/src/index.ts)님의 설계 바탕으로 구현했습니다.

### 피드백, 고민

- addTodoItem 함수

  - todoList class의 addTodoItem에

  ```
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
  ```

  해당 에러가 발생합니다.

  - 확정 할당 연산자 !를 사용할 때는 에러가 사라집니다.
  - class TodoItem의 constructor의 `tags`를 `tags?`로 변경해주면 에러가 사라집니다.

- render 관련 함수

  - render 관련 함수가 실제로 HTMLElement를 받아 화면에 뿌려준다고 생각했습니다.
  - 따라서 class TodoItem의 render은

  ```
    render(parentNode: HTMLElement) {
    parentNode.innerHTML = `
      <li>${(this.userId, this.category, this.content, this.tags)}</li>
    `;
  }
  ```

  parentNode를 render함수로 받아 내부에 todoItem의 요소들을 뿌려주는 방식으로 구현했습니다

  - 그러나 class TodoList의 render 함수의 역할을 정확히 파악하지 못해 공란으로 남겨두었습니다.

- class

  - 제가 class에 익숙하지 않아 설계대로 잘 구현되지 않은 점이 있을 수 있습니다
  - class todoList constructor에서 todoList를 []로 초기화시켰습니다.

- 기타
  - Readme와 JSDoc를 꼼꼼히 작성해주셔서 좋았습니다 👍
