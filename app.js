let express                 = require("express"),
     app                    = express(),
     bodyParser             = require("body-parser"),
     methodOverride         = require("method-override"),
     mongoose               = require("mongoose"),
     passport               = require("passport"),
     LocalStrategy          = require("passport-local"),
     passportLocalMongoose  = require("passport-local-mongoose"),
     helmet                 = require("helmet");
     
     app.use(helmet());
     app.use(function(req, res, next){
         res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
         next()
     });
     
     app.use(express.static( __dirname + "/public" ));
     app.use(methodOverride( "_method" ));
     app.use(bodyParser.urlencoded({ extended: true }));
     app.set("view engine", "ejs");
     
    //  mongoose.connect("mongodb://localhost/testProj");
     
    //  let clientSchema = mongoose.Schema({
    //     client: String,
    //     jobOwner: String,
    //     trackingNo: String,
    //     acceptance: String,
    //     sr: String,
    //     trades: String,
    //     nte: String,
    //     sub: String,
    //     cams: String,
    //     cc: String,
    //     website: String,
    //     instructions: String
    //  });
     
    //  let Client = mongoose.Model("Client", clientSchema);
     
     let client = [
            {
                client: "Medscape",
                jobOwner: "Joe",
                trackingNo: "22",
                acceptance: "yes",
                sr: "Yes",
                trades: "Idk",
                nte: "what?",
                sub: "string",
                cams: "Idk",
                cc: "hahaha",
                website: "www.google.com",
                instructions: "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            },
            {
                client: "Baystone",
                jobOwner: "Joe",
                trackingNo: "22",
                acceptance: "yes",
                sr: "Yes",
                trades: "Idk",
                nte: "what?",
                sub: "string",
                cams: "Idk",
                cc: "hahaha",
                website: "www.google.com",
                instructions: "Lorem ipsum is lorem ipsum"
            },
           {
                client: "Officite",
                jobOwner: "Joe",
                trackingNo: "22",
                acceptance: "yes",
                sr: "Yes",
                trades: "Idk",
                nte: "what?",
                sub: "string",
                cams: "Idk",
                cc: "hahaha",
                website: "www.google.com",
                instructions: "Lorem ipsum is lorem ipsum"
            },
            {
                client: "Baystone",
                jobOwner: "Joe",
                trackingNo: "22",
                acceptance: "yes",
                sr: "Yes",
                trades: "Idk",
                nte: "what?",
                sub: "string",
                cams: "Idk",
                cc: "hahaha",
                website: "www.google.com",
                instructions: "Lorem ipsum is lorem ipsum"
            },
            {
                client: "Baystone",
                jobOwner: "Joe",
                trackingNo: "22",
                acceptance: "yes",
                sr: "Yes",
                trades: "Idk",
                nte: "what?",
                sub: "string",
                cams: "Idk",
                cc: "hahaha",
                website: "www.google.com",
                instructions: "Lorem ipsum is lorem ipsum"
            }
         ];
     
     app.get("/", function(req, res){
        res.render("index"); 
     });
     app.get("/clients", function(req,res){
         res.render("client", {client: client});
     });
     
//PORT TO LISTEN FOR REQUEST
     app.listen(process.env.PORT, process.env.IP, function(){
         console.log("Server Started!")
     });