var mysql=require('mysql')
var excel = require('excel4node');

async function db(query){
    let con = mysql.createConnection({
        host: "10.175.4.18",
        user: "apms",
        password: "welcome@2013",
        database : 'user_management'
    });
    return new Promise(resolve=>{

        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query(query, async function (err, data) {
                if (err) throw err;
                con.end();
                resolve(data);
            });
        });
    })
    
}

function header(worksheet,style,data){    
    worksheet.cell(1,1).string('user_id').style(style);
    worksheet.cell(1,2).string('email_id').style(style);
    worksheet.cell(1,3).string('full_name').style(style);
    worksheet.cell(1,4).string('Department').style(style);
    worksheet.cell(1,5).string('created_on').style(style);
    worksheet.cell(1,6).string('Module 1').style(style);
    worksheet.cell(1,7).string('Access').style(style);
    worksheet.cell(1,8).string('Module 2').style(style);
    worksheet.cell(1,9).string('Access').style(style);
    worksheet.cell(1,10).string('Module 3').style(style);
    worksheet.cell(1,11).string('Access').style(style);
    worksheet.cell(1,12).string('Module 4').style(style);
    worksheet.cell(1,13).string('Access').style(style);
    worksheet.cell(1,14).string('Module 5').style(style);
    worksheet.cell(1,15).string('Access').style(style);
    // for(let i = 0,j=1 ; i <data*2 ; i+=2,j++){
    //     worksheet.cell(1,i+5).string('Module '+j).style(style);
    //     worksheet.cell(1,i+6).string('Access '+j).style(style);
    // }
    return;
}


async function main(){
    var workbook = new excel.Workbook(); 
    var style = workbook.createStyle({
        font: {
            size: 12
        }
    });
    var nameStyle = workbook.createStyle({
        font: {
            bold: true,
            size: 12
        }
    });
    var headerStyle = workbook.createStyle({
        font: {
        bold: true,
        size: 12
        },
        fill: {
            type: 'pattern',
            patternType: 'solid', 
            fgColor: '2172d7'
        }
    });
    var worksheet;
    worksheet = workbook.addWorksheet("Sheet 1");   
    // let rolesData =await db(`SELECT u.user_id,u.email_id,u.full_name,u.created_on,app.name as Module,r.RoleName as Access FROM user_management.users u
    // join  user_management.user_role_mapping rm on rm.user_id=u.user_id
    // join user_management.application_role_mapping arm on arm.id=rm.app_role_map_id
    // join user_management.role r on r.RoleId = arm.role_id
    // join user_management.applications app on app.app_id=arm.app_id
    // where u.is_mll=1 and rm.status=1 order by u.email_id;`)
    // console.log(rolesData)
    let rolesData = [
        {
            "user_id" : "0c4dd1f6d55b383c8ff55a88940fbc03",
            "email_id" : " DAGA.PUNIT@mahindra.com",
            "full_name" : "Punit Daga ",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-05-27 08:50:40",
            "Module" : "BA on boarding",
            "Access" : "MLL Operations"
        },
        {
            "user_id" : "0c4dd1f6d55b383c8ff55a88940fbc03",
            "email_id" : " DAGA.PUNIT@mahindra.com",
            "full_name" : "Punit Daga ",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-05-27 08:50:40",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "0c4dd1f6d55b383c8ff55a88940fbc03",
            "email_id" : " DAGA.PUNIT@mahindra.com",
            "full_name" : "Punit Daga ",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-05-27 08:50:40",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "82252977145402ac10989a462fe67f3b",
            "email_id" : "23069347@mahindra.com",
            "full_name" : "Abhay Pawar",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-07-27 09:08:02",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "82252977145402ac10989a462fe67f3b",
            "email_id" : "23069347@mahindra.com",
            "full_name" : "Abhay Pawar",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-07-27 09:08:02",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "160b0a6ac7dead6d897b3fef9ed85b9c",
            "email_id" : "23097287@mahindra.com",
            "full_name" : "ShivGovind Singh",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-08-19 13:37:50",
            "Module" : "BA on boarding",
            "Access" : "BA Admin"
        },
        {
            "user_id" : "160b0a6ac7dead6d897b3fef9ed85b9c",
            "email_id" : "23097287@mahindra.com",
            "full_name" : "ShivGovind Singh",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-08-19 13:37:50",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "160b0a6ac7dead6d897b3fef9ed85b9c",
            "email_id" : "23097287@mahindra.com",
            "full_name" : "ShivGovind Singh",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-08-19 13:37:50",
            "Module" : "Rfp Module",
            "Access" : "BA Admin"
        },
        {
            "user_id" : "160b0a6ac7dead6d897b3fef9ed85b9c",
            "email_id" : "23097287@mahindra.com",
            "full_name" : "ShivGovind Singh",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-08-19 13:37:50",
            "Module" : "Meta-Data",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "160b0a6ac7dead6d897b3fef9ed85b9c",
            "email_id" : "23097287@mahindra.com",
            "full_name" : "ShivGovind Singh",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-08-19 13:37:50",
            "Module" : "BA on boarding",
            "Access" : "BA Engagement Manager"
        },
        {
            "user_id" : "160b0a6ac7dead6d897b3fef9ed85b9c",
            "email_id" : "23097287@mahindra.com",
            "full_name" : "ShivGovind Singh",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-08-19 13:37:50",
            "Module" : "BA on boarding",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "160b0a6ac7dead6d897b3fef9ed85b9c",
            "email_id" : "23097287@mahindra.com",
            "full_name" : "ShivGovind Singh",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-08-19 13:37:50",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "160b0a6ac7dead6d897b3fef9ed85b9c",
            "email_id" : "23097287@mahindra.com",
            "full_name" : "ShivGovind Singh",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-08-19 13:37:50",
            "Module" : "Rfp Module",
            "Access" : "MLL procurement Manager"
        },
        {
            "user_id" : "160b0a6ac7dead6d897b3fef9ed85b9c",
            "email_id" : "23097287@mahindra.com",
            "full_name" : "ShivGovind Singh",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-08-19 13:37:50",
            "Module" : "Rfp Module",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "9c30e234843173673d7936b1c03681fe",
            "email_id" : "23099601@mahindra.com",
            "full_name" : "Keshav Agrawal",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-05 08:16:20",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "9c30e234843173673d7936b1c03681fe",
            "email_id" : "23099601@mahindra.com",
            "full_name" : "Keshav Agrawal",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-05 08:16:20",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "2434c06f2dfeca3f6503200827c1b264",
            "email_id" : "23161562@mahindra.com",
            "full_name" : "ANOOSHA REDDY",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-08-05 07:30:49",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "2434c06f2dfeca3f6503200827c1b264",
            "email_id" : "23161562@mahindra.com",
            "full_name" : "ANOOSHA REDDY",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-08-05 07:30:49",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "81bf6bccdb3a310a4d8a954388fb316e",
            "email_id" : "23164362@mahindra.com",
            "full_name" : "Amit Madav",
            "Department" : "MLL-Commercial",
            "created_on" : "2021-04-20 12:02:12",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "81bf6bccdb3a310a4d8a954388fb316e",
            "email_id" : "23164362@mahindra.com",
            "full_name" : "Amit Madav",
            "Department" : "MLL-Commercial",
            "created_on" : "2021-04-20 12:02:12",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "154659a074d5003e2d4acdf964b66abc",
            "email_id" : "23177999",
            "full_name" : "VINAYAK SHINDE",
            "Department" : "MLL-Admin",
            "created_on" : "2020-05-14 06:38:43",
            "Module" : "BA on boarding",
            "Access" : "MLL Operations"
        },
        {
            "user_id" : "154659a074d5003e2d4acdf964b66abc",
            "email_id" : "23177999",
            "full_name" : "VINAYAK SHINDE",
            "Department" : "MLL-Admin",
            "created_on" : "2020-05-14 06:38:43",
            "Module" : "BA on boarding",
            "Access" : "BA Admin"
        },
        {
            "user_id" : "154659a074d5003e2d4acdf964b66abc",
            "email_id" : "23177999",
            "full_name" : "VINAYAK SHINDE",
            "Department" : "MLL-Admin",
            "created_on" : "2020-05-14 06:38:43",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "a035b2b10fa0ad12b79779bce14e93c4",
            "email_id" : "23178394@mahindra.com",
            "full_name" : "TEJAS SAWANT",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:28:45",
            "Module" : "BA on boarding",
            "Access" : "MLL Operations"
        },
        {
            "user_id" : "a035b2b10fa0ad12b79779bce14e93c4",
            "email_id" : "23178394@mahindra.com",
            "full_name" : "TEJAS SAWANT",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:28:45",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "7632feca0396e3dd2eb3852ad70de1f9",
            "email_id" : "23179059@mahindra.com",
            "full_name" : "admin test",
            "Department" : "MLL-Super Admin",
            "created_on" : "2021-12-29 07:10:18",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "91db39b2054189f24cbf8e8635130d54",
            "email_id" : "23183645",
            "full_name" : "AKASH RAIKAR",
            "Department" : "MLL-Admin",
            "created_on" : "2020-06-11 15:22:57",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "91db39b2054189f24cbf8e8635130d54",
            "email_id" : "23183645",
            "full_name" : "AKASH RAIKAR",
            "Department" : "MLL-Admin",
            "created_on" : "2020-06-11 15:22:57",
            "Module" : "BA on boarding",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "204b8a91a13b2d8b1eaca8ba2b48f737",
            "email_id" : "23183645@mahindra.com",
            "full_name" : "AKASH RAIKAR",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-08-05 08:18:27",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "204b8a91a13b2d8b1eaca8ba2b48f737",
            "email_id" : "23183645@mahindra.com",
            "full_name" : "AKASH RAIKAR",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-08-05 08:18:27",
            "Module" : "Meta-Data",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "204b8a91a13b2d8b1eaca8ba2b48f737",
            "email_id" : "23183645@mahindra.com",
            "full_name" : "AKASH RAIKAR",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-08-05 08:18:27",
            "Module" : "BA on boarding",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "204b8a91a13b2d8b1eaca8ba2b48f737",
            "email_id" : "23183645@mahindra.com",
            "full_name" : "AKASH RAIKAR",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-08-05 08:18:27",
            "Module" : "BA on boarding",
            "Access" : "MLL Operations"
        },
        {
            "user_id" : "5865113a3e3a4a979f9157af29941bb3",
            "email_id" : "23193675@mahindra.com",
            "full_name" : "ANDREW D’SOUZA",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-09-15 06:14:25",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "5865113a3e3a4a979f9157af29941bb3",
            "email_id" : "23193675@mahindra.com",
            "full_name" : "ANDREW D’SOUZA",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-09-15 06:14:25",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "5e5ed5914082e22a3283696378e77996",
            "email_id" : "23200116@mahindra.com",
            "full_name" : "RAINA AKSHAY",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-09-15 06:15:46",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "5e5ed5914082e22a3283696378e77996",
            "email_id" : "23200116@mahindra.com",
            "full_name" : "RAINA AKSHAY",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-09-15 06:15:46",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "526b42642ff45e339ef43a0b783813d0",
            "email_id" : "23200631@mahindra.com",
            "full_name" : "ROHAN NAIK",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:22:44",
            "Module" : "BA on boarding",
            "Access" : "MLL Operations"
        },
        {
            "user_id" : "526b42642ff45e339ef43a0b783813d0",
            "email_id" : "23200631@mahindra.com",
            "full_name" : "ROHAN NAIK",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:22:44",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "526b42642ff45e339ef43a0b783813d0",
            "email_id" : "23200631@mahindra.com",
            "full_name" : "ROHAN NAIK",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:22:44",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "41b6c85a0c9d23981b3fa8dbb697b6be",
            "email_id" : "23206908@mahindra.com",
            "full_name" : "Rajul Pandey",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-09-18 02:46:09",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "41b6c85a0c9d23981b3fa8dbb697b6be",
            "email_id" : "23206908@mahindra.com",
            "full_name" : "Rajul Pandey",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-09-18 02:46:09",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "e6f3e4b800a9fc50022a6a2b7b254bbe",
            "email_id" : "23212022@mahindra.com",
            "full_name" : "NIKITA KANODIA",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 14:44:12",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "e6f3e4b800a9fc50022a6a2b7b254bbe",
            "email_id" : "23212022@mahindra.com",
            "full_name" : "NIKITA KANODIA",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 14:44:12",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "e6f3e4b800a9fc50022a6a2b7b254bbe",
            "email_id" : "23212022@mahindra.com",
            "full_name" : "NIKITA KANODIA",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 14:44:12",
            "Module" : "Dashboard",
            "Access" : "BA Admin"
        },
        {
            "user_id" : "0cb2ebc6c650d8663358cb5ffb9a488d",
            "email_id" : "23220347@mahindra.com",
            "full_name" : "D SURRESHKUMAR",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-08 09:57:35",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "0cb2ebc6c650d8663358cb5ffb9a488d",
            "email_id" : "23220347@mahindra.com",
            "full_name" : "D SURRESHKUMAR",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-08 09:57:35",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "8e027729524023c1e95bb0d86b5a7926",
            "email_id" : "23221696@mahindra.com",
            "full_name" : "NAYAN NALGE",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-04-23 06:17:13",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "8e027729524023c1e95bb0d86b5a7926",
            "email_id" : "23221696@mahindra.com",
            "full_name" : "NAYAN NALGE",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-04-23 06:17:13",
            "Module" : "Complaint Management System",
            "Access" : "CMS-ba"
        },
        {
            "user_id" : "8e027729524023c1e95bb0d86b5a7926",
            "email_id" : "23221696@mahindra.com",
            "full_name" : "NAYAN NALGE",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-04-23 06:17:13",
            "Module" : "Bill Hub",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "8e027729524023c1e95bb0d86b5a7926",
            "email_id" : "23221696@mahindra.com",
            "full_name" : "NAYAN NALGE",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-04-23 06:17:13",
            "Module" : "SAP",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "8e027729524023c1e95bb0d86b5a7926",
            "email_id" : "23221696@mahindra.com",
            "full_name" : "NAYAN NALGE",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-04-23 06:17:13",
            "Module" : "Complaint Management System",
            "Access" : "CMS-admin"
        },
        {
            "user_id" : "8e027729524023c1e95bb0d86b5a7926",
            "email_id" : "23221696@mahindra.com",
            "full_name" : "NAYAN NALGE",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-04-23 06:17:13",
            "Module" : "Meta-Data",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "8e027729524023c1e95bb0d86b5a7926",
            "email_id" : "23221696@mahindra.com",
            "full_name" : "NAYAN NALGE",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-04-23 06:17:13",
            "Module" : "Rfp Module",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "8e027729524023c1e95bb0d86b5a7926",
            "email_id" : "23221696@mahindra.com",
            "full_name" : "NAYAN NALGE",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-04-23 06:17:13",
            "Module" : "BA on boarding",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "8e027729524023c1e95bb0d86b5a7926",
            "email_id" : "23221696@mahindra.com",
            "full_name" : "NAYAN NALGE",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-04-23 06:17:13",
            "Module" : "User Management",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "255b1dacf56cecf418dd9a7711064609",
            "email_id" : "25002336@mahindra.com",
            "full_name" : "DHAIRYA SHAH",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:15:51",
            "Module" : "BA on boarding",
            "Access" : "MLL Operations"
        },
        {
            "user_id" : "255b1dacf56cecf418dd9a7711064609",
            "email_id" : "25002336@mahindra.com",
            "full_name" : "DHAIRYA SHAH",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:15:51",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "255b1dacf56cecf418dd9a7711064609",
            "email_id" : "25002336@mahindra.com",
            "full_name" : "DHAIRYA SHAH",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:15:51",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "f9f817029f6784074c3219df7d60fd5d",
            "email_id" : "25002806@mahindra.com",
            "full_name" : "PREET BHATT",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:18:38",
            "Module" : "BA on boarding",
            "Access" : "MLL Operations"
        },
        {
            "user_id" : "f9f817029f6784074c3219df7d60fd5d",
            "email_id" : "25002806@mahindra.com",
            "full_name" : "PREET BHATT",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:18:38",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "f9f817029f6784074c3219df7d60fd5d",
            "email_id" : "25002806@mahindra.com",
            "full_name" : "PREET BHATT",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:18:38",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "f158ad0c02f55c39e004da631d502af5",
            "email_id" : "25003639@mahindra.com",
            "full_name" : "YOGINI KANSE",
            "Department" : "MLL-Procurement",
            "created_on" : "2022-04-06 10:15:54",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "020d72df936c0f61eb4c03e3df9ac463",
            "email_id" : "25004593@mahindra.com",
            "full_name" : "SOORAJ NAIR",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:27:08",
            "Module" : "BA on boarding",
            "Access" : "MLL Operations"
        },
        {
            "user_id" : "020d72df936c0f61eb4c03e3df9ac463",
            "email_id" : "25004593@mahindra.com",
            "full_name" : "SOORAJ NAIR",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:27:08",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "020d72df936c0f61eb4c03e3df9ac463",
            "email_id" : "25004593@mahindra.com",
            "full_name" : "SOORAJ NAIR",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:27:08",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "47074d204f2a261a8166d50e7ec5e695",
            "email_id" : "25004669@mahindra.com",
            "full_name" : "SUSHMITA DAS",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-09-14 10:20:03",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "47074d204f2a261a8166d50e7ec5e695",
            "email_id" : "25004669@mahindra.com",
            "full_name" : "SUSHMITA DAS",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-09-14 10:20:03",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "644c9d3b85599f3c92323de6c96d80ca",
            "email_id" : "25005557@mahindra.com",
            "full_name" : "Adabala Subrahmanyam",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-12-02 06:10:29",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "644c9d3b85599f3c92323de6c96d80ca",
            "email_id" : "25005557@mahindra.com",
            "full_name" : "Adabala Subrahmanyam",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-12-02 06:10:29",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "cb2551a79596ca95095510a40579114f",
            "email_id" : "25005657@mahindra.com",
            "full_name" : "HIMANSHU DESHMUKH",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:19:30",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "cb2551a79596ca95095510a40579114f",
            "email_id" : "25005657@mahindra.com",
            "full_name" : "HIMANSHU DESHMUKH",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:19:30",
            "Module" : "BA on boarding",
            "Access" : "MLL Operations"
        },
        {
            "user_id" : "cb2551a79596ca95095510a40579114f",
            "email_id" : "25005657@mahindra.com",
            "full_name" : "HIMANSHU DESHMUKH",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-10-14 06:19:30",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "6e9d94e9b2f87bb01033fca4b14e575d",
            "email_id" : "25006922_wrong@mahindra.com",
            "full_name" : "AUSTIN FROES",
            "Department" : "MLL-Admin",
            "created_on" : "2020-07-23 14:16:16",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "68be1a23e61e53020b5878aa1eff63e0",
            "email_id" : "25007574@mahindra.com",
            "full_name" : "RANVIR SINGH",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-11-11 07:33:27",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "68be1a23e61e53020b5878aa1eff63e0",
            "email_id" : "25007574@mahindra.com",
            "full_name" : "RANVIR SINGH",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-11-11 07:33:27",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "5f2ba1c0a08e0c64dcd0f30dec208fdd",
            "email_id" : "25007989@mahindra.com",
            "full_name" : "Narender Yadav",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-01-04 05:08:31",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "5f2ba1c0a08e0c64dcd0f30dec208fdd",
            "email_id" : "25007989@mahindra.com",
            "full_name" : "Narender Yadav",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-01-04 05:08:31",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "6b58344e2f4dce046ecf17014014170f",
            "email_id" : "25008096@mahindra.com",
            "full_name" : "UJJWAL MISHRA",
            "Department" : "MLL-Super Admin",
            "created_on" : "2020-04-30 07:24:46",
            "Module" : "BA on boarding",
            "Access" : "BA Admin"
        },
        {
            "user_id" : "6b58344e2f4dce046ecf17014014170f",
            "email_id" : "25008096@mahindra.com",
            "full_name" : "UJJWAL MISHRA",
            "Department" : "MLL-Super Admin",
            "created_on" : "2020-04-30 07:24:46",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "cb29f40b9c1d2c1cbcb196cc8911ad08",
            "email_id" : "25008105@mahindra.com",
            "full_name" : "VIVEK WAGH",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-05-06 10:24:21",
            "Module" : "BA on boarding",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "cb29f40b9c1d2c1cbcb196cc8911ad08",
            "email_id" : "25008105@mahindra.com",
            "full_name" : "VIVEK WAGH",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-05-06 10:24:21",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "cb29f40b9c1d2c1cbcb196cc8911ad08",
            "email_id" : "25008105@mahindra.com",
            "full_name" : "VIVEK WAGH",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-05-06 10:24:21",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "cb29f40b9c1d2c1cbcb196cc8911ad08",
            "email_id" : "25008105@mahindra.com",
            "full_name" : "VIVEK WAGH",
            "Department" : "MLL-Procurement",
            "created_on" : "2020-05-06 10:24:21",
            "Module" : "Meta-Data",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "6a95d383655208e962e55bcc0ce77371",
            "email_id" : "2506743@mahindra.com",
            "full_name" : "VINAY VIJAY NIVALKAR",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-14 06:47:55",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "6a95d383655208e962e55bcc0ce77371",
            "email_id" : "2506743@mahindra.com",
            "full_name" : "VINAY VIJAY NIVALKAR",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-14 06:47:55",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "c7a553261a56600337b9a41d45bf64b3",
            "email_id" : "29000125@mahindra.com",
            "full_name" : "Vaibhav Bhangale",
            "Department" : "MLL-Commercial",
            "created_on" : "2021-02-16 07:58:04",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "c7a553261a56600337b9a41d45bf64b3",
            "email_id" : "29000125@mahindra.com",
            "full_name" : "Vaibhav Bhangale",
            "Department" : "MLL-Commercial",
            "created_on" : "2021-02-16 07:58:04",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "8ef11a4ba4f75fa7c5554c41c2c8f0ac",
            "email_id" : "29000431@mahindra.com",
            "full_name" : "Archana Khot",
            "Department" : "MLL-Commercial",
            "created_on" : "2021-06-07 04:48:56",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "8ef11a4ba4f75fa7c5554c41c2c8f0ac",
            "email_id" : "29000431@mahindra.com",
            "full_name" : "Archana Khot",
            "Department" : "MLL-Commercial",
            "created_on" : "2021-06-07 04:48:56",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "31cdd8665a74116f0d1dc9501b6c6da8",
            "email_id" : "29000432@mahindra.com",
            "full_name" : "R Seshagopal",
            "Department" : "MLL-Commercial",
            "created_on" : "2021-06-17 06:58:38",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "31cdd8665a74116f0d1dc9501b6c6da8",
            "email_id" : "29000432@mahindra.com",
            "full_name" : "R Seshagopal",
            "Department" : "MLL-Commercial",
            "created_on" : "2021-06-17 06:58:38",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "ecb29930a0ecda73ad58f82805157233",
            "email_id" : "50000687",
            "full_name" : "Shilpa Tiwari",
            "Department" : "MLL-Procurement",
            "created_on" : "2022-02-04 08:45:16",
            "Module" : "Rfp Module",
            "Access" : "MLL procurement Manager"
        },
        {
            "user_id" : "ecb29930a0ecda73ad58f82805157233",
            "email_id" : "50000687",
            "full_name" : "Shilpa Tiwari",
            "Department" : "MLL-Procurement",
            "created_on" : "2022-02-04 08:45:16",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "ecb29930a0ecda73ad58f82805157233",
            "email_id" : "50000687",
            "full_name" : "Shilpa Tiwari",
            "Department" : "MLL-Procurement",
            "created_on" : "2022-02-04 08:45:16",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "99fb83194a4e2a804c1232ea7d7e91c6",
            "email_id" : "admin.test1@mahindra.com",
            "full_name" : "admin test 1",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-24 10:12:43",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "99fb83194a4e2a804c1232ea7d7e91c6",
            "email_id" : "admin.test1@mahindra.com",
            "full_name" : "admin test 1",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-24 10:12:43",
            "Module" : "Rfp Module",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "99fb83194a4e2a804c1232ea7d7e91c6",
            "email_id" : "admin.test1@mahindra.com",
            "full_name" : "admin test 1",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-24 10:12:43",
            "Module" : "BA on boarding",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "46a5b47b296d3cb33d455e8c1c13ffdb",
            "email_id" : "admin.test2@mahindra.com",
            "full_name" : "admin test 2",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-24 10:13:32",
            "Module" : "BA on boarding",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "46a5b47b296d3cb33d455e8c1c13ffdb",
            "email_id" : "admin.test2@mahindra.com",
            "full_name" : "admin test 2",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-24 10:13:32",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "46a5b47b296d3cb33d455e8c1c13ffdb",
            "email_id" : "admin.test2@mahindra.com",
            "full_name" : "admin test 2",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-24 10:13:32",
            "Module" : "Rfp Module",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "c02a1b27b71ca3c8e164521a3aa83dec",
            "email_id" : "admin.test@mahindra.com",
            "full_name" : "admin test",
            "Department" : "MLL-Super Admin",
            "created_on" : "2019-12-24 10:09:59",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "c02a1b27b71ca3c8e164521a3aa83dec",
            "email_id" : "admin.test@mahindra.com",
            "full_name" : "admin test",
            "Department" : "MLL-Super Admin",
            "created_on" : "2019-12-24 10:09:59",
            "Module" : "BA on boarding",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "c02a1b27b71ca3c8e164521a3aa83dec",
            "email_id" : "admin.test@mahindra.com",
            "full_name" : "admin test",
            "Department" : "MLL-Super Admin",
            "created_on" : "2019-12-24 10:09:59",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "c02a1b27b71ca3c8e164521a3aa83dec",
            "email_id" : "admin.test@mahindra.com",
            "full_name" : "admin test",
            "Department" : "MLL-Super Admin",
            "created_on" : "2019-12-24 10:09:59",
            "Module" : "Rfp Module",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "c02a1b27b71ca3c8e164521a3aa83dec",
            "email_id" : "admin.test@mahindra.com",
            "full_name" : "admin test",
            "Department" : "MLL-Super Admin",
            "created_on" : "2019-12-24 10:09:59",
            "Module" : "Meta-Data",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "c02a1b27b71ca3c8e164521a3aa83dec",
            "email_id" : "admin.test@mahindra.com",
            "full_name" : "admin test",
            "Department" : "MLL-Super Admin",
            "created_on" : "2019-12-24 10:09:59",
            "Module" : "BA on boarding",
            "Access" : "MLL Accounts"
        },
        {
            "user_id" : "c02a1b27b71ca3c8e164521a3aa83dec",
            "email_id" : "admin.test@mahindra.com",
            "full_name" : "admin test",
            "Department" : "MLL-Super Admin",
            "created_on" : "2019-12-24 10:09:59",
            "Module" : "SAP",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "d765557b204dc58a4ce0795f75046360",
            "email_id" : "admin1@mahindra.com",
            "full_name" : "admin 1",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-17 10:00:47",
            "Module" : "BA on boarding",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "d765557b204dc58a4ce0795f75046360",
            "email_id" : "admin1@mahindra.com",
            "full_name" : "admin 1",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-17 10:00:47",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "d765557b204dc58a4ce0795f75046360",
            "email_id" : "admin1@mahindra.com",
            "full_name" : "admin 1",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-17 10:00:47",
            "Module" : "Rfp Module",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "ca320c708b4333bc379cb838a44c8fe4",
            "email_id" : "admin2@mahindra.com",
            "full_name" : "admin 2",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-17 13:02:56",
            "Module" : "BA on boarding",
            "Access" : "IDT-Team"
        },
        {
            "user_id" : "ca320c708b4333bc379cb838a44c8fe4",
            "email_id" : "admin2@mahindra.com",
            "full_name" : "admin 2",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-17 13:02:56",
            "Module" : "Complaint Management System",
            "Access" : "CMS-admin"
        },
        {
            "user_id" : "6168bf0bc757d922e44d4265d2d37961",
            "email_id" : "admin5@mahindra.com",
            "full_name" : "admin 5",
            "Department" : "MLL-Commercial",
            "created_on" : "2019-12-17 13:43:27",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "6168bf0bc757d922e44d4265d2d37961",
            "email_id" : "admin5@mahindra.com",
            "full_name" : "admin 5",
            "Department" : "MLL-Commercial",
            "created_on" : "2019-12-17 13:43:27",
            "Module" : "Rfp Module",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "6168bf0bc757d922e44d4265d2d37961",
            "email_id" : "admin5@mahindra.com",
            "full_name" : "admin 5",
            "Department" : "MLL-Commercial",
            "created_on" : "2019-12-17 13:43:27",
            "Module" : "BA on boarding",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "6168bf0bc757d922e44d4265d2d37961",
            "email_id" : "admin5@mahindra.com",
            "full_name" : "admin 5",
            "Department" : "MLL-Commercial",
            "created_on" : "2019-12-17 13:43:27",
            "Module" : "SAP",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "c0b765549565270c31853e7d7fcf4e7e",
            "email_id" : "admin6@mahindra.com",
            "full_name" : "admin 6",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-17 14:09:01",
            "Module" : "BA on boarding",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "c0b765549565270c31853e7d7fcf4e7e",
            "email_id" : "admin6@mahindra.com",
            "full_name" : "admin 6",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-17 14:09:01",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "c0b765549565270c31853e7d7fcf4e7e",
            "email_id" : "admin6@mahindra.com",
            "full_name" : "admin 6",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-17 14:09:01",
            "Module" : "Rfp Module",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "e8794b0268d11b31b8e6812be2d6fcc2",
            "email_id" : "admin@mahindra.com",
            "full_name" : "admin",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-13 07:41:57",
            "Module" : "Rfp Module",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "e8794b0268d11b31b8e6812be2d6fcc2",
            "email_id" : "admin@mahindra.com",
            "full_name" : "admin",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-13 07:41:57",
            "Module" : "User Management",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "e8794b0268d11b31b8e6812be2d6fcc2",
            "email_id" : "admin@mahindra.com",
            "full_name" : "admin",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-13 07:41:57",
            "Module" : "BA on boarding",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "bf04893836cdf43b47ecd68cf323d09f",
            "email_id" : "bankar.suraj@mahindra.com",
            "full_name" : "Suraj Bankar",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-14 08:59:14",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "bf04893836cdf43b47ecd68cf323d09f",
            "email_id" : "bankar.suraj@mahindra.com",
            "full_name" : "Suraj Bankar",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-14 08:59:14",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "af1bada657063e0e9ddff867dcfaafb9",
            "email_id" : "bhangale.vaibhav@mahindra.com",
            "full_name" : "Vaibhav Bhangale",
            "Department" : "MLL-Commercial",
            "created_on" : "2021-02-16 07:32:26",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "af1bada657063e0e9ddff867dcfaafb9",
            "email_id" : "bhangale.vaibhav@mahindra.com",
            "full_name" : "Vaibhav Bhangale",
            "Department" : "MLL-Commercial",
            "created_on" : "2021-02-16 07:32:26",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "4d759450e4104b5e8e78757840802062",
            "email_id" : "bhattacharya.amrita@mahindra.com",
            "full_name" : "AMRITA BHATTACHARYA",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-28 07:21:57",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "4d759450e4104b5e8e78757840802062",
            "email_id" : "bhattacharya.amrita@mahindra.com",
            "full_name" : "AMRITA BHATTACHARYA",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-28 07:21:57",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "93ddb8d05a40114cde8e2a0d6527ec51",
            "email_id" : "Chandak.mayank@mahindra.com",
            "full_name" : "MAYANK CHANDAK",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-08 10:02:36",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "93ddb8d05a40114cde8e2a0d6527ec51",
            "email_id" : "Chandak.mayank@mahindra.com",
            "full_name" : "MAYANK CHANDAK",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-08 10:02:36",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "21e049b63c766160072730ec74441cb5",
            "email_id" : "chougule.amol2@mahindra.com",
            "full_name" : "Amol Chougule",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-14 08:57:54",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "21e049b63c766160072730ec74441cb5",
            "email_id" : "chougule.amol2@mahindra.com",
            "full_name" : "Amol Chougule",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-14 08:57:54",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "e774ccf69094bc99fbd08ace2033ce40",
            "email_id" : "cms.admin@mahindra.com",
            "full_name" : "cms admin",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-17 11:34:11",
            "Module" : "Complaint Management System",
            "Access" : "CMS-admin"
        },
        {
            "user_id" : "e774ccf69094bc99fbd08ace2033ce40",
            "email_id" : "cms.admin@mahindra.com",
            "full_name" : "cms admin",
            "Department" : "MLL-Admin",
            "created_on" : "2019-12-17 11:34:11",
            "Module" : "BA on boarding",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "19055a81f0f7f98737515e4da5d7ac19",
            "email_id" : "DARADE.UTTAM2@mahindra.com",
            "full_name" : "UTTAM DARADE",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-07-09 09:15:22",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "19055a81f0f7f98737515e4da5d7ac19",
            "email_id" : "DARADE.UTTAM2@mahindra.com",
            "full_name" : "UTTAM DARADE",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-07-09 09:15:22",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "3455604d4b011ac2e79d53a3a35e5442",
            "email_id" : "dave.jay@mahindra.com",
            "full_name" : "JAY DAVE",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-15 10:32:51",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "3455604d4b011ac2e79d53a3a35e5442",
            "email_id" : "dave.jay@mahindra.com",
            "full_name" : "JAY DAVE",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-15 10:32:51",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "0689db8b3367fb5ee299ffe93aa0e991",
            "email_id" : "ghadge.satish@mahindra.com",
            "full_name" : "Satish Ghadge",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-19 06:05:36",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "0689db8b3367fb5ee299ffe93aa0e991",
            "email_id" : "ghadge.satish@mahindra.com",
            "full_name" : "Satish Ghadge",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-19 06:05:36",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "544cdc1026a942b5b990c5d9398bbd7c",
            "email_id" : "ghag.varsha2@mahindra.com",
            "full_name" : "Varsha Ghag",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-19 06:04:47",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "544cdc1026a942b5b990c5d9398bbd7c",
            "email_id" : "ghag.varsha2@mahindra.com",
            "full_name" : "Varsha Ghag",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-19 06:04:47",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "a5f0a76e94a820f344ea33215a9e4e2f",
            "email_id" : "hingu.bijal@mahindra.com",
            "full_name" : "BIJAL HINGU",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 13:27:03",
            "Module" : "Dashboard",
            "Access" : "MLL Accounts"
        },
        {
            "user_id" : "a5f0a76e94a820f344ea33215a9e4e2f",
            "email_id" : "hingu.bijal@mahindra.com",
            "full_name" : "BIJAL HINGU",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 13:27:03",
            "Module" : "BA on boarding",
            "Access" : "MLL Accounts"
        },
        {
            "user_id" : "a5f0a76e94a820f344ea33215a9e4e2f",
            "email_id" : "hingu.bijal@mahindra.com",
            "full_name" : "BIJAL HINGU",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 13:27:03",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "a5f0a76e94a820f344ea33215a9e4e2f",
            "email_id" : "hingu.bijal@mahindra.com",
            "full_name" : "BIJAL HINGU",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 13:27:03",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "e040427738d234261eed543a075f96ca",
            "email_id" : "j.baskerraja@mahindra.com",
            "full_name" : "J BASKERRAJA",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 14:56:40",
            "Module" : "Dashboard",
            "Access" : "BA Admin"
        },
        {
            "user_id" : "e040427738d234261eed543a075f96ca",
            "email_id" : "j.baskerraja@mahindra.com",
            "full_name" : "J BASKERRAJA",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 14:56:40",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "e040427738d234261eed543a075f96ca",
            "email_id" : "j.baskerraja@mahindra.com",
            "full_name" : "J BASKERRAJA",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 14:56:40",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "5feec4c0187a7471179145819382ab65",
            "email_id" : "JANAKIRAMAN.G@mahindra.com",
            "full_name" : "JANAKIRAMAN G",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-28 07:19:48",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "5feec4c0187a7471179145819382ab65",
            "email_id" : "JANAKIRAMAN.G@mahindra.com",
            "full_name" : "JANAKIRAMAN G",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-28 07:19:48",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "79a5bd6ef1d749c4e7cb6b8e4648ccdd",
            "email_id" : "Jangale.bharat@mahindra.com",
            "full_name" : "Bharat Jangle",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-14 08:58:39",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "79a5bd6ef1d749c4e7cb6b8e4648ccdd",
            "email_id" : "Jangale.bharat@mahindra.com",
            "full_name" : "Bharat Jangle",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-14 08:58:39",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "2b70393eed357202c8832c0579873f3a",
            "email_id" : "KALOKHE.SHEETAL2@mahindra.com",
            "full_name" : "Sheetal Kalokhe",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-14 08:57:20",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "2b70393eed357202c8832c0579873f3a",
            "email_id" : "KALOKHE.SHEETAL2@mahindra.com",
            "full_name" : "Sheetal Kalokhe",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-14 08:57:20",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "478427fde61b9f339e50a4dff87e3a11",
            "email_id" : "KATARE.RAHUL@mahindra.com",
            "full_name" : "RAHUL KATARE",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-07-09 09:16:14",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "478427fde61b9f339e50a4dff87e3a11",
            "email_id" : "KATARE.RAHUL@mahindra.com",
            "full_name" : "RAHUL KATARE",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-07-09 09:16:14",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "7017c10dcee3cfe876098f6e3a5632ba",
            "email_id" : "Katkar.sujay@mahindra.com",
            "full_name" : "SUJAY KATKAR",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-28 07:14:40",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "7017c10dcee3cfe876098f6e3a5632ba",
            "email_id" : "Katkar.sujay@mahindra.com",
            "full_name" : "SUJAY KATKAR",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-28 07:14:40",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "b768cd4d8a6363fb1a319aaad689608b",
            "email_id" : "konda.ravikiran@mahindra.com",
            "full_name" : "RAVIKIRAN KONDA",
            "Department" : "MLL-Accounts",
            "created_on" : "2020-04-29 09:24:31",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "b768cd4d8a6363fb1a319aaad689608b",
            "email_id" : "konda.ravikiran@mahindra.com",
            "full_name" : "RAVIKIRAN KONDA",
            "Department" : "MLL-Accounts",
            "created_on" : "2020-04-29 09:24:31",
            "Module" : "SAP",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "b768cd4d8a6363fb1a319aaad689608b",
            "email_id" : "konda.ravikiran@mahindra.com",
            "full_name" : "RAVIKIRAN KONDA",
            "Department" : "MLL-Accounts",
            "created_on" : "2020-04-29 09:24:31",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "b768cd4d8a6363fb1a319aaad689608b",
            "email_id" : "konda.ravikiran@mahindra.com",
            "full_name" : "RAVIKIRAN KONDA",
            "Department" : "MLL-Accounts",
            "created_on" : "2020-04-29 09:24:31",
            "Module" : "BA on boarding",
            "Access" : "MLL Accounts"
        },
        {
            "user_id" : "4a1fb0e6e936577e8586a6b71d141072",
            "email_id" : "kothari.roshni@mahindra.com",
            "full_name" : "admin test",
            "Department" : "MLL-Super Admin",
            "created_on" : "2021-12-14 05:44:42",
            "Module" : "BA on boarding",
            "Access" : "BA Admin"
        },
        {
            "user_id" : "4a1fb0e6e936577e8586a6b71d141072",
            "email_id" : "kothari.roshni@mahindra.com",
            "full_name" : "admin test",
            "Department" : "MLL-Super Admin",
            "created_on" : "2021-12-14 05:44:42",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "9c4ed6b52c62c0fce61a389cc8646092",
            "email_id" : "KUMAR.RAKESH12@mahindra.com",
            "full_name" : "RAKESH KUMAR",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-07-06 12:10:08",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "9c4ed6b52c62c0fce61a389cc8646092",
            "email_id" : "KUMAR.RAKESH12@mahindra.com",
            "full_name" : "RAKESH KUMAR",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-07-06 12:10:08",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "0450bd04bb3c14a4f4cf75ef11dd7c37",
            "email_id" : "nivalkar.vinay@mahindra.com",
            "full_name" : "Vinay Nivalkar",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-19 06:02:07",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "0450bd04bb3c14a4f4cf75ef11dd7c37",
            "email_id" : "nivalkar.vinay@mahindra.com",
            "full_name" : "Vinay Nivalkar",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-19 06:02:07",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "e63872118cdcd9be5042d71c1e485fe6",
            "email_id" : "Parab.sumati@mahindra.com",
            "full_name" : "SUMATI PARAB",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-29 09:30:07",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "e63872118cdcd9be5042d71c1e485fe6",
            "email_id" : "Parab.sumati@mahindra.com",
            "full_name" : "SUMATI PARAB",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-29 09:30:07",
            "Module" : "BA on boarding",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "e63872118cdcd9be5042d71c1e485fe6",
            "email_id" : "Parab.sumati@mahindra.com",
            "full_name" : "SUMATI PARAB",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-29 09:30:07",
            "Module" : "BA on boarding",
            "Access" : "MLL Accounts"
        },
        {
            "user_id" : "e63872118cdcd9be5042d71c1e485fe6",
            "email_id" : "Parab.sumati@mahindra.com",
            "full_name" : "SUMATI PARAB",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-29 09:30:07",
            "Module" : "SAP",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "e63872118cdcd9be5042d71c1e485fe6",
            "email_id" : "Parab.sumati@mahindra.com",
            "full_name" : "SUMATI PARAB",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-29 09:30:07",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "5581b08497170b9fd14280f8e51d0921",
            "email_id" : "PARALIKAR.RUSHIKESH@mahindra.com",
            "full_name" : "Rushikesh Paralikar",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-14 08:55:11",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "5581b08497170b9fd14280f8e51d0921",
            "email_id" : "PARALIKAR.RUSHIKESH@mahindra.com",
            "full_name" : "Rushikesh Paralikar",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-14 08:55:11",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "a963744d8a509d870f6115bb0cd605df",
            "email_id" : "Pasnur.kiran@mahindra.com",
            "full_name" : "KIRAN PASNUR",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-14 08:47:36",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "a963744d8a509d870f6115bb0cd605df",
            "email_id" : "Pasnur.kiran@mahindra.com",
            "full_name" : "KIRAN PASNUR",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-14 08:47:36",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "cdc057f94c1d42301fd33279762aa202",
            "email_id" : "patel.asha@mahindra.com",
            "full_name" : "Asha Patel",
            "Department" : "MLL-Commercial",
            "created_on" : "2021-01-12 07:42:18",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "cdc057f94c1d42301fd33279762aa202",
            "email_id" : "patel.asha@mahindra.com",
            "full_name" : "Asha Patel",
            "Department" : "MLL-Commercial",
            "created_on" : "2021-01-12 07:42:18",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "56b574c13b8155720f2d5ca6cf75b8b0",
            "email_id" : "PEREIRA.ALITIA@mahindra.com",
            "full_name" : "Alitia Chettiar",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-06-18 04:59:30",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "56b574c13b8155720f2d5ca6cf75b8b0",
            "email_id" : "PEREIRA.ALITIA@mahindra.com",
            "full_name" : "Alitia Chettiar",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-06-18 04:59:30",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "1cb6ab107faac7617766806756830d1e",
            "email_id" : "PRASAD.BILLAKANTI@MAHINDRA.COM",
            "full_name" : "PRASAD BILLAKANTI",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 09:19:06",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "1cb6ab107faac7617766806756830d1e",
            "email_id" : "PRASAD.BILLAKANTI@MAHINDRA.COM",
            "full_name" : "PRASAD BILLAKANTI",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 09:19:06",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "1cb6ab107faac7617766806756830d1e",
            "email_id" : "PRASAD.BILLAKANTI@MAHINDRA.COM",
            "full_name" : "PRASAD BILLAKANTI",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 09:19:06",
            "Module" : "Complaint Management System",
            "Access" : "CMS-ba"
        },
        {
            "user_id" : "1cb6ab107faac7617766806756830d1e",
            "email_id" : "PRASAD.BILLAKANTI@MAHINDRA.COM",
            "full_name" : "PRASAD BILLAKANTI",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 09:19:06",
            "Module" : "Dashboard",
            "Access" : "BA Admin"
        },
        {
            "user_id" : "23551058d30458d6d5e2b25a038f141b",
            "email_id" : "RAJKUMAR.JAMBIGI@mahindra.com",
            "full_name" : "RAJ KUMAR JAMBIGI",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-07-06 11:58:40",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "23551058d30458d6d5e2b25a038f141b",
            "email_id" : "RAJKUMAR.JAMBIGI@mahindra.com",
            "full_name" : "RAJ KUMAR JAMBIGI",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-07-06 11:58:40",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "b73ea5a9a634ffb009f4ecea564b2a2d",
            "email_id" : "RANE.MRUNAL@mahindra.com",
            "full_name" : "Mrunal Rane",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-19 06:19:14",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "b73ea5a9a634ffb009f4ecea564b2a2d",
            "email_id" : "RANE.MRUNAL@mahindra.com",
            "full_name" : "Mrunal Rane",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-19 06:19:14",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "b7b1fbd41965212f8dbcb1ccaffae472",
            "email_id" : "raul.shamika@mahindra.com",
            "full_name" : "SHAMIKA ARVIND RAUL",
            "Department" : "MLL-Accounts",
            "created_on" : "2020-04-29 09:28:40",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "b7b1fbd41965212f8dbcb1ccaffae472",
            "email_id" : "raul.shamika@mahindra.com",
            "full_name" : "SHAMIKA ARVIND RAUL",
            "Department" : "MLL-Accounts",
            "created_on" : "2020-04-29 09:28:40",
            "Module" : "SAP",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "b7b1fbd41965212f8dbcb1ccaffae472",
            "email_id" : "raul.shamika@mahindra.com",
            "full_name" : "SHAMIKA ARVIND RAUL",
            "Department" : "MLL-Accounts",
            "created_on" : "2020-04-29 09:28:40",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "b7b1fbd41965212f8dbcb1ccaffae472",
            "email_id" : "raul.shamika@mahindra.com",
            "full_name" : "SHAMIKA ARVIND RAUL",
            "Department" : "MLL-Accounts",
            "created_on" : "2020-04-29 09:28:40",
            "Module" : "BA on boarding",
            "Access" : "MLL Accounts"
        },
        {
            "user_id" : "ab1e6eb80ba015c5402438f5bcb8c875",
            "email_id" : "ROJASRI.GODUMAGAMA@mahindra.com",
            "full_name" : "ROJA SRI GODUMAGAMA",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-07-06 11:57:28",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "ab1e6eb80ba015c5402438f5bcb8c875",
            "email_id" : "ROJASRI.GODUMAGAMA@mahindra.com",
            "full_name" : "ROJA SRI GODUMAGAMA",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-07-06 11:57:28",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "34b9ace64b7a85072b185d17a70aa337",
            "email_id" : "sakpal.mithila@mahindra.com",
            "full_name" : "MITHILA SAKPAL",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 14:57:59",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "34b9ace64b7a85072b185d17a70aa337",
            "email_id" : "sakpal.mithila@mahindra.com",
            "full_name" : "MITHILA SAKPAL",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 14:57:59",
            "Module" : "Dashboard",
            "Access" : "BA Admin"
        },
        {
            "user_id" : "34b9ace64b7a85072b185d17a70aa337",
            "email_id" : "sakpal.mithila@mahindra.com",
            "full_name" : "MITHILA SAKPAL",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-23 14:57:59",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "4e77fd9abd8bca9f80065add5cdeeb5a",
            "email_id" : "SALUNKHE.MANGESH_dup@mahindra.com",
            "full_name" : "MANGESH SALUNKHE",
            "Department" : "MLL-Commercial",
            "created_on" : "2021-05-05 13:05:43",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "43965c88b12f1062d90c570763117a5a",
            "email_id" : "SALUNKHE2.MANGESH@mahindra.com",
            "full_name" : "MANGESH SALUNKHE",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-06-19 10:30:21",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "43965c88b12f1062d90c570763117a5a",
            "email_id" : "SALUNKHE2.MANGESH@mahindra.com",
            "full_name" : "MANGESH SALUNKHE",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-06-19 10:30:21",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "dca7e52db17b9ce6b29fbda1b16b35bd",
            "email_id" : "sawant.sanket@mahindra.com",
            "full_name" : "Admin",
            "Department" : "IT-development",
            "created_on" : "2020-01-20 09:57:22",
            "Module" : "Rfp Module",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "dca7e52db17b9ce6b29fbda1b16b35bd",
            "email_id" : "sawant.sanket@mahindra.com",
            "full_name" : "Admin",
            "Department" : "IT-development",
            "created_on" : "2020-01-20 09:57:22",
            "Module" : "BA on boarding",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "f00a3dbdaf73a614d70db7ec7bae71d7",
            "email_id" : "SHAH.BHVAN@mahindra.com",
            "full_name" : "BHAVAN K. SHAH",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-14 09:03:46",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "f00a3dbdaf73a614d70db7ec7bae71d7",
            "email_id" : "SHAH.BHVAN@mahindra.com",
            "full_name" : "BHAVAN K. SHAH",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-14 09:03:46",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "6894610d6769ccad6d074855f40166d7",
            "email_id" : "SINGH.SHIVGOVIND@mahindra.com \t",
            "full_name" : "SHIVGOVIND SINGH",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-08-19 06:35:46",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "6894610d6769ccad6d074855f40166d7",
            "email_id" : "SINGH.SHIVGOVIND@mahindra.com \t",
            "full_name" : "SHIVGOVIND SINGH",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-08-19 06:35:46",
            "Module" : "Rfp Module",
            "Access" : "BA Admin"
        },
        {
            "user_id" : "6894610d6769ccad6d074855f40166d7",
            "email_id" : "SINGH.SHIVGOVIND@mahindra.com \t",
            "full_name" : "SHIVGOVIND SINGH",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-08-19 06:35:46",
            "Module" : "BA on boarding",
            "Access" : "BA Engagement Manager"
        },
        {
            "user_id" : "6894610d6769ccad6d074855f40166d7",
            "email_id" : "SINGH.SHIVGOVIND@mahindra.com \t",
            "full_name" : "SHIVGOVIND SINGH",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-08-19 06:35:46",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "6894610d6769ccad6d074855f40166d7",
            "email_id" : "SINGH.SHIVGOVIND@mahindra.com \t",
            "full_name" : "SHIVGOVIND SINGH",
            "Department" : "MLL-Procurement",
            "created_on" : "2021-08-19 06:35:46",
            "Module" : "Complaint Management System",
            "Access" : "CMS-ba"
        },
        {
            "user_id" : "a5569ae4ed5131be5f61989c928345fb",
            "email_id" : "singh.shivgovind@mahindra.com",
            "full_name" : "ShivGovind Singh",
            "Department" : "BA-Admin",
            "created_on" : "2020-01-17 08:41:01",
            "Module" : "Complaint Management System",
            "Access" : "CMS-admin"
        },
        {
            "user_id" : "a5569ae4ed5131be5f61989c928345fb",
            "email_id" : "singh.shivgovind@mahindra.com",
            "full_name" : "ShivGovind Singh",
            "Department" : "BA-Admin",
            "created_on" : "2020-01-17 08:41:01",
            "Module" : "BA on boarding",
            "Access" : "BA Engagement Manager"
        },
        {
            "user_id" : "a5569ae4ed5131be5f61989c928345fb",
            "email_id" : "singh.shivgovind@mahindra.com",
            "full_name" : "ShivGovind Singh",
            "Department" : "BA-Admin",
            "created_on" : "2020-01-17 08:41:01",
            "Module" : "Rfp Module",
            "Access" : "MLL-ADMIN"
        },
        {
            "user_id" : "a5569ae4ed5131be5f61989c928345fb",
            "email_id" : "singh.shivgovind@mahindra.com",
            "full_name" : "ShivGovind Singh",
            "Department" : "BA-Admin",
            "created_on" : "2020-01-17 08:41:01",
            "Module" : "BA on boarding",
            "Access" : "MLL Procurement"
        },
        {
            "user_id" : "996343c606dbdea44bd80022b45580ef",
            "email_id" : "sivaprabhu.m@mahindra.com",
            "full_name" : "Sivaprabhu.M",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-19 05:37:10",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "996343c606dbdea44bd80022b45580ef",
            "email_id" : "sivaprabhu.m@mahindra.com",
            "full_name" : "Sivaprabhu.M",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-19 05:37:10",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "774e69046c15d6890dbcb0b41b41e1cd",
            "email_id" : "swami.narayan@mahindra.com",
            "full_name" : "Narayan Swami",
            "Department" : "MLL-Commercial",
            "created_on" : "2022-01-27 08:27:59",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "774e69046c15d6890dbcb0b41b41e1cd",
            "email_id" : "swami.narayan@mahindra.com",
            "full_name" : "Narayan Swami",
            "Department" : "MLL-Commercial",
            "created_on" : "2022-01-27 08:27:59",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "32c18acc402e70ab8e0f1c6104af64dd",
            "email_id" : "VANGA.VISHWANATH@mahindra.com",
            "full_name" : "VISHWANATH VANGA",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-28 08:56:29",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "32c18acc402e70ab8e0f1c6104af64dd",
            "email_id" : "VANGA.VISHWANATH@mahindra.com",
            "full_name" : "VISHWANATH VANGA",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-04-28 08:56:29",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "3008c851f88b1aff4e74ed1caface85f",
            "email_id" : "yadav.sarvash@mahindra.com",
            "full_name" : "SARVASH YADAV",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-15 10:30:35",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "3008c851f88b1aff4e74ed1caface85f",
            "email_id" : "yadav.sarvash@mahindra.com",
            "full_name" : "SARVASH YADAV",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-05-15 10:30:35",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        },
        {
            "user_id" : "dc15c5fcbe6a3c7e71d168323304ca42",
            "email_id" : " JAWALKAR.SOWMYA@mahindra.com",
            "full_name" : "SOWMYA JAWALKAR",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-06-12 15:52:31",
            "Module" : "Complaint Management System",
            "Access" : "CMS-support"
        },
        {
            "user_id" : "dc15c5fcbe6a3c7e71d168323304ca42",
            "email_id" : " JAWALKAR.SOWMYA@mahindra.com",
            "full_name" : "SOWMYA JAWALKAR",
            "Department" : "MLL-Commercial",
            "created_on" : "2020-06-12 15:52:31",
            "Module" : "BA on boarding",
            "Access" : "MLL Commercial"
        }
    ]
    
    
    
    let modulearr = ["BA on boarding", "Complaint Management System", "Rfp Module", "Meta-Data", "SAP"  ]
    let moduleLength = -1
    let obj = {}
    
    for(let i =0 ;i < rolesData.length;i++){
        let data = rolesData[i];
        let index=modulearr.indexOf(data.Module)+1;

        if(obj[data.user_id]){
            if(obj[data.user_id]['index']){
                index=obj[data.user_id]['index'];
            }
            obj[data.user_id][`Module ${index}`]=data.Module
            obj[data.user_id][`Access ${index}`]=data.Access
            // if(obj[data.user_id]['Module'].length>moduleLength)
            //     moduleLength = obj[data.user_id]['Module'].length
        }
        else{
            obj[data.user_id]={}
            obj[data.user_id]['email_id'] = data.email_id
            obj[data.user_id]['full_name'] = data.full_name
            obj[data.user_id]['Department'] = data.Department
            obj[data.user_id]['created_on'] = data.created_on
            obj[data.user_id][`Module ${index}`] = data.Module
            obj[data.user_id][`Access ${index}`] = data.Access
            // if(obj[data.user_id]['Module'].length>moduleLength)
            //     moduleLength = obj[data.user_id]['Module'].length
        }
    }
    let j = 2;
    console.log({obj});
    for(let key in obj){
        worksheet.cell(j,1).string(key).style(nameStyle); 
        worksheet.cell(j,2).string(obj[key]['email_id']).style(style);
        worksheet.cell(j,3).string(obj[key]['full_name']).style(style);
        worksheet.cell(j,4).string(obj[key]['Department']).style(style);
        worksheet.cell(j,5).string(JSON.stringify(obj[key]['created_on'])).style(style);
        let module1=obj[key]['Module 1'] || "NA";
        let access1=obj[key]['Access 1'] || "NA";
        let module2=obj[key]['Module 2'] || "NA";
        let access2=obj[key]['Access 2'] || "NA";
        let module3=obj[key]['Module 3'] || "NA";
        let access3=obj[key]['Access 3'] || "NA";
        let module4=obj[key]['Module 4'] || "NA";
        let access4=obj[key]['Access 4'] || "NA";
        let module5=obj[key]['Module 5'] || "NA";
        let access5=obj[key]['Access 5'] || "NA";
        worksheet.cell(j,6).string(module1).style(style);
        worksheet.cell(j,7).string(access1).style(style);
        worksheet.cell(j,8).string(module2).style(style);
        worksheet.cell(j,9).string(access2).style(style);
        worksheet.cell(j,10).string(module3).style(style);
        worksheet.cell(j,11).string(access3).style(style);
        worksheet.cell(j,12).string(module4).style(style);
        worksheet.cell(j,13).string(access4).style(style);
        worksheet.cell(j,14).string(module5).style(style);
        worksheet.cell(j,15).string(access5).style(style);

        // for(let i = 0,x=1 ; x <5 ; i+=2,x++){
        //     if(obj[key][`Module ${x}`]){
        //         worksheet.cell(j,i+5).string(obj[key][`Module ${x}`]).style(style);
        //         worksheet.cell(j,i+6).string(obj[key][`Access ${x}`]).style(style);
        //     }
        //     else{
        //         worksheet.cell(j,i+5).string('NA').style(style);
        //         worksheet.cell(j,i+6).string('NA').style(style);
        //     }
        // }
        j++;
    }
    header(worksheet,headerStyle,moduleLength)
   console.log(moduleLength)
    workbook.write('Report3.xlsx', function(err, stats) {
        if (err)
            console.log(false)
        else
            console.log(true)
        
    });   
}

main()