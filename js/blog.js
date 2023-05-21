// let namaSiswa1 = "Adit";
// let namaSiswa2 = "Zidane";
// let namaSiswa3 = "Raihan";

// console.log(namaSiswa1);
// console.log(namaSiswa2);
// console.log(namaSiswa3);

// // array
// let namaSiswa = ["Adit", "Zidane", "Raihan", "Handika"]
// console.log(namaSiswa);
// console.log(namaSiswa[0]);
// console.log(namaSiswa[2]);

// object
// let nama = "Nabil";
// let alamat = "Bekasi";
// let umur = 17;

// console.log(nama);
// console.log(alamat);
// console.log(umur);

// let dataPersonal1 = {
//     nama: "Adit",
//     alamat: "Antapani",
//     umur: 17
// }

// let dataPersonal2 = {
//     nama: "Raihan",
//     alamat: "Aceh",
//     umur: 19
// }

// let dataPersonal3 = {
//     nama: "Nabil",
//     alamat: "Bekasi",
//     umur: 14
// }

// let dataPersonal4 = {
//     nama: "Adit",
//     alamat: "Antapani",
//     umur: 17
// }

// console.log(dataPersonal1);
// console.log(dataPersonal2);
// console.log(dataPersonal3);
// console.log(dataPersonal4);

// // array of object
// let dataCaleg = [
//     {nama: "Joko Widodo", alamat: "Solo" },
//     {nama: "Puan Maharani", alamat: "Jakarta Barat" },
//     {nama: "Prabowo S", alamat: "Semarang" },
// ];

// console.log(dataCaleg)
// console.log(dataCaleg[1].nama);









let dataBlog = [];

function addBlog(event) {
    event.preventDefault();

    let title = document.getElementById("input-blog-title").value;
    let content = document.getElementById("input-blog-content").value;
    let image = document.getElementById("input-blog-image").files;

    image = URL.createObjectURL(image[0]);
    console.log(image);

    let blog = {
        title,
        content,
        image,
        postAT: "19 May 2023",
        author: "Aditya Aliandra",
    };

    dataBlog.push(blog);
    console.log(blog);

    renderBlog();

}

function renderBlog() {
    document.getElementById("contents").innerHTML = "";

    for (let index = 0; index < dataBlog.length; index++) {
        document.getElementById("contents").innerHTML += `
                    <div id="contents" class="blog-list">
                        <div class="blog-list-item">
                            <div class="blog-image">
                                <img src="${dataBlog[index].image}" alt="blog_img"/>
                            </div>
                            <div class="blog-content">
                                <div class="btn-group">
                                    <button class="btn-edit">Edit Post</button>
                                    <buttom class="btn-delete">Delete Post</buttom>
                                </div>
                                <div class="text-box">
                                    <h1>
                                        <a href="blog-detail.html" target="_blank">${dataBlog[index].title}</a>
                                    </h1>
                                    <div class="detail-blog-content">
                                    ${dataBlog[index].postAT} - ${dataBlog[index].author}
                                    </div>
                                    <p>
                                    ${dataBlog[index].content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    };
};
 
