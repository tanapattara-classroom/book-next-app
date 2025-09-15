# book-app

### API

http://localhost:3000/

### API Document

http://localhost:3000/api-docs

### Mongodb express -> ดูข้อมูลในฐานข้อมูล

http://localhost:8081/
-> username -> admin
-> password -> password123

```
{
  "username": "teacher",
  "email": "teacher@kku.ac.th",
  "password": "password123"
}
```

# register

```
url /register
```

สร้างไฟล์ใหม่

```
/src/app/register/page.tsx
```

สร้างคลาสใหม่ชื่อ AuthService.ts เพื่อใช้เก็บฟังก์ชั่นสำหรับการเข้าสู่ระบบและยืนยันตัวตน

```
/src/libs/AuthService.ts
```
