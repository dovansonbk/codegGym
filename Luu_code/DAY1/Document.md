1. HTML Là Gì?
- Là ngôn ngữ siêu văn bản -> Tạo bộ khung cho trang web

2. Tại sao phải sử dụng HTML
- HTML là ngôn ngữ duy nhất mà trình duyệt biên dịch và hiển thị lên được

3. Định nghĩa một trang HTML
- Cú pháp tạo trang HTML: fileName.html

- Bên trong trang HTML có cấu trúc chuẩn (w3c)

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title></title>
    </head>
    <body>
        // Code HTML khác
        <a title="" href="" test="1">Google</a>
        <p>Content</p>
        <h3>1000</h3>
        <div class='test' number="1">
            <img  alt="" />
            <p>Test Content</p>
        </div>
    </body>
    </html>

- Title page: Có ý nghĩa cực kỳ quan trọng đối với SEO

4. Cấu trúc của một thẻ HTML
    <tagName attributeName1="value1" .... attributeN="valueN">
        Content
    </tagName>

    Lưu ý:
        - Content: Luôn nằm giữa thẻ đóng và mở
        - 1 thẻ HTML có thể có 1 hoặc nhiều hoặc không thuộc tính
        - Thuộc tính có thể là mặc định của HTML hoặc người dùng định nghĩa
        - tagName: Có thể định nghĩa
            Ex: <product id="">Content</product>
                <product-list name="" class="">Content</product-list>
        - Một số trường hợp thẻ HTML ko có thẻ đóng và nó sẽ đóng thẻ trên chính nó
            Ex:
                <meta charset="utf-8" />
                <br/>
                <input type="" name="" />

5. Các thẻ HTML thường sử dụng

## các thẻ tiêu đề
    <h1>Học lập trình web</h1>
    <h2>Học lập trình web</h2>
    <h3>Học lập trình web</h3>
    <h4>Học lập trình web</h4>
    <h5>Học lập trình web</h5>
    <h6>Học lập trình web</h6>

    Lưu ý đối với SEO: trên cùng 1 trang chỉ được phép xuất hiện 1 thẻ H1

## Nhóm các thẻ thể hiện văn bản
- <strong>Content</strong> // In đậm văn bản

- <b>Content</b> // In đậm văn bản

- <br/> // Xuống dòng

- <font size="number" color="">Content</font> // Định dạng màu chữ và cỡ chữ

- <i>Content</i> // In nghiêng chữ

- <u>Content</u> // Gạch chân chữ

- <del>Xóa văn bản</del>

- <small>Content</small> // làm cho nội dung nhỏ hơn so với cỡ chữ hiện tại của trang

- <p>Content dung></p> // Thể hiện đoạn văn


Lưu ý với SEO: strong có vai trò quan trọng trong việc nhấn mạnh keyword bên trong nội dung bài viết

## Thẻ liên kết
Cú pháp:
    <a href="" title="" target="">Nội dung của liên kết</a>

    href: Link liên kết Ex: https://google.com
    title: Giải thích cho nội dung của liên kết
    target: Qui định cách chuyển liên kết

    