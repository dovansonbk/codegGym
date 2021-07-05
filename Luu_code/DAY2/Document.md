## Learn Git
### Using git command

Step1:
    Go to folder project
    Command: cd folder_path

Step2:
    Config git

    - git config --global user.name "Your name" // Set name
    - git config --global user.email your email // Set email
    - git config --list // Kiểm tra các config

Step3: Init project
    - git init  // Khởi tạo repo

Step4. Kiểm tra trạng thái của repo
    - git status

Step5. Tạo nhánh default (branch)
    git checkout -b branch_name
    Ex: git checkout -b develop

    -> Tạo nhánh mới và tự động chuyển sang nhánh đó

- Để xem danh sách branch: git branch
- Để chuyển nhánh: git checkout tên_nhánh