# B811098-Todo_list

### To do list 

- 내가 원하는 목록(list)을 만들어 해당 목록 안에 내가 원하는 [할 일(todo)]를 추가할 수 있다
- 내가 만든 to do list를 보며 했는지 안했는지 check 할 수 있고, 목록과 [할 일]을 삭제, 수정할 수 있다
- 우선순위를 지정할 수 있으며, 내가 지정한 우선순위에 따라 [할 일]들이 나열된다

### 구현한 기능

- list 추가 기능
- todo 추가 기능
- list 삭제 기능
- todo 삭제 기능
- list와 todo 완료 처리 기능
- 완료한 todo 체크하고 다시 체크 해지할 수 있는 기능
- 우선순위 지정할 수 있는 기능

### 구현 진행 중인 기능 (미완성)

- 수정 기능
- 지정한 우선순위에 따라 todo가 나열되어 보이도록 하는 기능
- list 클릭하면 그 안에 담긴 todo가 화면에 보이도록 하는 기능

### 추가적으로 구현하고 싶은 기능 (예정)

- mode 바꿀 수 있는 기능 (모든 todo, 완료되지 않은 todo만, 완료된 todo만)
- deadline 설정할 수 있는 기능
- 앱으로 구현

### 사용한 기술 & 언어

- html 
- css
- javascript
- node.js (미완성)

### 결과 이미지

![main](https://user-images.githubusercontent.com/78442839/113510609-9c02e300-9596-11eb-9381-02aaffe89241.JPG)

### 실행 방법

##### list section (왼쪽)

- 텍스트 박스에 원하는 list 제목 입력한 후 '+' 아이콘 클릭하면 추가 완료
- 추가된 list 오른쪽에 있는 '휴지통' 아이콘 클릭하면 삭제 완료

##### todo section (오른쪽)

- 텍스트 박스에 원하는 todo 입력하고 오른쪽에 있는 우선순위 드롭박스에서 원하는 우선순위 지정한 후 '+' 아이콘 클릭하면 추가 완료
- 화면에는 입력한 todo의 내용만 올라와 있음
- 입력한 todo의 개수에 따라 우선순위 드롭박스 선택지가 생성됨
- 따로 우선순위를 지정하지 않으면 순서에 따라 자동으로 지정됨
- 추가된 todo 오른쪽에 있는 '휴지통' 아이콘 클릭하면 삭제 완료
