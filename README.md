<div align=center>
	<span id="top">
	<h1>🎉🎪 잇잇(itEat) BE</h1><br>
  </span>
</div>


## 🧑‍💻 개발 기능 
- 김민수
  - Festival
  - Review
  - Notification
  - Menu
  - Notice
  - Board
  - AWS S3
  
## **📂 프로젝트 구조**
<details>
  <summary>폴더 구조 보기</summary>
<pre>
📦festival-be
 ┣ 📂config
 ┃ ┣ 📜cookieConfig.js
 ┃ ┗ 📜passportConfig.js
 ┣ 📂controllers
 ┃ ┣ 📜boardController.js
 ┃ ┣ 📜boothController.js
 ┃ ┣ 📜commentController.js
 ┃ ┣ 📜festivalController.js
 ┃ ┣ 📜menuController.js
 ┃ ┣ 📜noticeController.js
 ┃ ┣ 📜notificationController.js
 ┃ ┣ 📜participationController.js
 ┃ ┣ 📜payController.js
 ┃ ┣ 📜reviewController.js
 ┃ ┣ 📜userController.js
 ┃ ┗ 📜wishlistController.js
 ┣ 📂middleware
 ┃ ┣ 📂booth
 ┃ ┃ ┗ 📜boothValidation.js
 ┃ ┣ 📂error
 ┃ ┃ ┣ 📜asyncHandler.js
 ┃ ┃ ┗ 📜errorHandler.js
 ┃ ┗ 📂passport
 ┃ ┃ ┗ 📜jwtToken.js
 ┣ 📂prisma
 ┃ ┣ 📂migrations
 ┃ ┃ ┣ 📂20241210120852_review
 ┃ ┃ ┃ ┗ 📜migration.sql
 ┃ ┃ ┗ 📜migration_lock.toml
 ┃ ┣ 📜schema.prisma
 ┃ ┗ 📜seed.js
 ┣ 📂repositorys
 ┃ ┣ 📜boardRepository.js
 ┃ ┣ 📜boothRepository.js
 ┃ ┣ 📜commentRepository.js
 ┃ ┣ 📜festivalRepository.js
 ┃ ┣ 📜menuRepository.js
 ┃ ┣ 📜noticeRepository.js
 ┃ ┣ 📜notificationRepository.js
 ┃ ┣ 📜participationRepository.js
 ┃ ┣ 📜payRepository.js
 ┃ ┣ 📜reviewRepository.js
 ┃ ┣ 📜userRepository.js
 ┃ ┗ 📜wishlistRepository.js
 ┣ 📂router
 ┃ ┣ 📜boardRouter.js
 ┃ ┣ 📜boothRouter.js
 ┃ ┣ 📜commentRouter.js
 ┃ ┣ 📜festivalRouter.js
 ┃ ┣ 📜menuRouter.js
 ┃ ┣ 📜noticeRouter.js
 ┃ ┣ 📜notificationRouter.js
 ┃ ┣ 📜participationRouter.js
 ┃ ┣ 📜payRouter.js
 ┃ ┣ 📜reviewRouter.js
 ┃ ┣ 📜userRouter.js
 ┃ ┗ 📜wishlistRouter.js
 ┣ 📂scheduler
 ┃ ┗ 📜festivalCreate.js
 ┣ 📂services
 ┃ ┣ 📜boardService.js
 ┃ ┣ 📜boothService.js
 ┃ ┣ 📜commentService.js
 ┃ ┣ 📜festivalService.js
 ┃ ┣ 📜menuService.js
 ┃ ┣ 📜noticeService.js
 ┃ ┣ 📜notificationService.js
 ┃ ┣ 📜participationService.js
 ┃ ┣ 📜payService.js
 ┃ ┣ 📜reviewService.js
 ┃ ┣ 📜userService.js
 ┃ ┗ 📜wishlistService.js
 ┣ 📂utils
 ┃ ┣ 📜checkUser.js
 ┃ ┗ 📜prismaClient.js
 ┣ 📜README.md
 ┣ 📜app.js
 ┣ 📜package-lock.json
 ┣ 📜package.json  
</pre>
</details>
