//controller: gelen requestlere vereceğimiz fonksiyon cevaplarını icerir.
//frontend ile veritabanı arasındaki baglantı böyle saglanır.

exports.getIndexPage = (req, res) => {
    res.status(200).render('index', {
        page_name: "index" //we've sent this page name information into index.ejs file.
    });
  }


  exports.getAboutPage = (req,res)=> {
    res.status(200).render('about', {
      page_name:"about"
    })
  }

