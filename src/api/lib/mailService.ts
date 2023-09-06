import nodemailer from "nodemailer";
import dotenv from 'dotenv'
import { env } from '../../infrastructure/env'
const hostname = "smtp.gmail.com";
const username = "noreply.dre@gmail.com";
const password = "xlhsclhdseakflat";

export const transporter = nodemailer.createTransport({
  host: hostname,
  port: 465,
  service: 'gmail',
  secure: false,
  requireTLS: true,
  auth: {
    user: username,
    pass: password,
  },
  tls: {
    rejectUnauthorized: false
  },
  logger: true
});

export async function sendPassword(firstName: string, lastName: string, email: any, password: any, callback: any) {

  await transporter.sendMail({
    from: "Dre <noreply.dre@gmail.com>", // sender address
    to: email,
    subject: "DRE User Password Change", // Subject line
    html: "<!DOCTYPE html>\n" +
      "<html xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" lang=\"en\">\n" +
      "\n" +
      "<head>\n" +
      "\t<title></title>\n" +
      "\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n" +
      "\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->\n" +
      "\t<style>\n" +
      "\t\t* {\n" +
      "\t\t\tbox-sizing: border-box;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\tbody {\n" +
      "\t\t\tmargin: 0;\n" +
      "\t\t\tpadding: 0;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\ta[x-apple-data-detectors] {\n" +
      "\t\t\tcolor: inherit !important;\n" +
      "\t\t\ttext-decoration: inherit !important;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\t#MessageViewBody a {\n" +
      "\t\t\tcolor: inherit;\n" +
      "\t\t\ttext-decoration: none;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\tp {\n" +
      "\t\t\tline-height: inherit\n" +
      "\t\t}\n" +
      "\n" +
      "\t\t.desktop_hide,\n" +
      "\t\t.desktop_hide table {\n" +
      "\t\t\tmso-hide: all;\n" +
      "\t\t\tdisplay: none;\n" +
      "\t\t\tmax-height: 0px;\n" +
      "\t\t\toverflow: hidden;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\t.image_block img+div {\n" +
      "\t\t\tdisplay: none;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\t@media (max-width:700px) {\n" +
      "\n" +
      "\t\t\t.image_block img.big,\n" +
      "\t\t\t.row-content {\n" +
      "\t\t\t\twidth: 100% !important;\n" +
      "\t\t\t}\n" +
      "\n" +
      "\t\t\t.mobile_hide {\n" +
      "\t\t\t\tdisplay: none;\n" +
      "\t\t\t}\n" +
      "\n" +
      "\t\t\t.stack .column {\n" +
      "\t\t\t\twidth: 100%;\n" +
      "\t\t\t\tdisplay: block;\n" +
      "\t\t\t}\n" +
      "\n" +
      "\t\t\t.mobile_hide {\n" +
      "\t\t\t\tmin-height: 0;\n" +
      "\t\t\t\tmax-height: 0;\n" +
      "\t\t\t\tmax-width: 0;\n" +
      "\t\t\t\toverflow: hidden;\n" +
      "\t\t\t\tfont-size: 0px;\n" +
      "\t\t\t}\n" +
      "\n" +
      "\t\t\t.desktop_hide,\n" +
      "\t\t\t.desktop_hide table {\n" +
      "\t\t\t\tdisplay: table !important;\n" +
      "\t\t\t\tmax-height: none !important;\n" +
      "\t\t\t}\n" +
      "\t\t}\n" +
      "\t</style>\n" +
      "</head>\n" +
      "\n" +
      "<body style=\"background-color: #fff0e3; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;\">\n" +
      "\t<table class=\"nl-container\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff0e3;\">\n" +
      "\t\t<tbody>\n" +
      "\t\t\t<tr>\n" +
      "\t\t\t\t<td>\n" +
      "\t\t\t\t\t<table class=\"row row-1\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:30px;line-height:30px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"heading_block block-2\" width=\"100%\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h1 style=\"margin: 0; color: #8a3c90; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;\"><span class=\"tinyMce-placeholder\">Welcome to DRE</span></h1>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"divider_block block-3\" width=\"100%\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"alignment\" align=\"center\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"divider_inner\" style=\"font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;\"><span>&#8202;</span></td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-2\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"image_block block-1\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\" style=\"width:100%;padding-right:0px;padding-left:0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"alignment\" align=\"center\" style=\"line-height:10px\"><img class=\"big\" src=\"https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7631/round_corner_top.png\" style=\"display: block; height: auto; border: 0; width: 680px; max-width: 100%;\" width=\"680\" alt=\"Top round corners\" title=\"Top round corners\"></div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-3\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"16.666666666666668%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:0px;line-height:0px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-2\" width=\"66.66666666666667%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:10px;line-height:10px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"paragraph_block block-2\" width=\"100%\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"color:#333333;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:15px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:18px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">Hello " + firstName + " " + lastName + ",</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">You now have access to the Dre Database. Please click on the link below for access. Please save the link to your favorites for future use.</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">Enter your email address in the correct field. Your temporary password is: <b>" + password + "</b></p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">Once you log in using your temporary password, please immediately reset your password.</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">Please contact your database administrator if you have any questions.</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">Thank You.</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0;\">&nbsp;</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-3\" style=\"height:20px;line-height:20px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-3\" width=\"16.666666666666668%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:0px;line-height:0px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-4\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"image_block block-1\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\" style=\"width:100%;padding-right:0px;padding-left:0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"alignment\" align=\"center\" style=\"line-height:10px\"><img class=\"big\" src=\"https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7631/round_corner_bottom.png\" style=\"display: block; height: auto; border: 0; width: 680px; max-width: 100%;\" width=\"680\" alt=\"Bottom round corners\" title=\"Bottom round corners\"></div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-5\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:20px;line-height:20px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-6\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"16.666666666666668%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:0px;line-height:0px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-2\" width=\"66.66666666666667%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:35px;line-height:35px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-3\" width=\"16.666666666666668%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:0px;line-height:0px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t</td>\n" +
      "\t\t\t</tr>\n" +
      "\t\t</tbody>\n" +
      "\t</table><!-- End -->\n" +
      "</body>\n" +
      "\n" +
      "</html>"
  }).then((res: any) => {
    callback("", res);
  }).catch((error: any) => {
    callback(error, "");
  })
}


export async function sendOTP(firstName: string, lastName: string, email: any, otp: any, callback: any) {

  await transporter.sendMail({
    from: "Dre <noreply.dre@gmail.com>", // sender address
    to: email,
    subject: "DRE User : OTP", // Subject line
    html: "<!DOCTYPE html>\n" +
      "<html xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" lang=\"en\">\n" +
      "\n" +
      "<head>\n" +
      "\t<title></title>\n" +
      "\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n" +
      "\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->\n" +
      "\t<style>\n" +
      "\t\t* {\n" +
      "\t\t\tbox-sizing: border-box;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\tbody {\n" +
      "\t\t\tmargin: 0;\n" +
      "\t\t\tpadding: 0;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\ta[x-apple-data-detectors] {\n" +
      "\t\t\tcolor: inherit !important;\n" +
      "\t\t\ttext-decoration: inherit !important;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\t#MessageViewBody a {\n" +
      "\t\t\tcolor: inherit;\n" +
      "\t\t\ttext-decoration: none;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\tp {\n" +
      "\t\t\tline-height: inherit\n" +
      "\t\t}\n" +
      "\n" +
      "\t\t.desktop_hide,\n" +
      "\t\t.desktop_hide table {\n" +
      "\t\t\tmso-hide: all;\n" +
      "\t\t\tdisplay: none;\n" +
      "\t\t\tmax-height: 0px;\n" +
      "\t\t\toverflow: hidden;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\t.image_block img+div {\n" +
      "\t\t\tdisplay: none;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\t@media (max-width:700px) {\n" +
      "\n" +
      "\t\t\t.image_block img.big,\n" +
      "\t\t\t.row-content {\n" +
      "\t\t\t\twidth: 100% !important;\n" +
      "\t\t\t}\n" +
      "\n" +
      "\t\t\t.mobile_hide {\n" +
      "\t\t\t\tdisplay: none;\n" +
      "\t\t\t}\n" +
      "\n" +
      "\t\t\t.stack .column {\n" +
      "\t\t\t\twidth: 100%;\n" +
      "\t\t\t\tdisplay: block;\n" +
      "\t\t\t}\n" +
      "\n" +
      "\t\t\t.mobile_hide {\n" +
      "\t\t\t\tmin-height: 0;\n" +
      "\t\t\t\tmax-height: 0;\n" +
      "\t\t\t\tmax-width: 0;\n" +
      "\t\t\t\toverflow: hidden;\n" +
      "\t\t\t\tfont-size: 0px;\n" +
      "\t\t\t}\n" +
      "\n" +
      "\t\t\t.desktop_hide,\n" +
      "\t\t\t.desktop_hide table {\n" +
      "\t\t\t\tdisplay: table !important;\n" +
      "\t\t\t\tmax-height: none !important;\n" +
      "\t\t\t}\n" +
      "\t\t}\n" +
      "\t</style>\n" +
      "</head>\n" +
      "\n" +
      "<body style=\"background-color: #fff0e3; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;\">\n" +
      "\t<table class=\"nl-container\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff0e3;\">\n" +
      "\t\t<tbody>\n" +
      "\t\t\t<tr>\n" +
      "\t\t\t\t<td>\n" +
      "\t\t\t\t\t<table class=\"row row-1\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:30px;line-height:30px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"heading_block block-2\" width=\"100%\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h1 style=\"margin: 0; color: #8a3c90; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;\"><span class=\"tinyMce-placeholder\">Welcome to DRE</span></h1>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"divider_block block-3\" width=\"100%\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"alignment\" align=\"center\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"divider_inner\" style=\"font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;\"><span>&#8202;</span></td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-2\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"image_block block-1\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\" style=\"width:100%;padding-right:0px;padding-left:0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"alignment\" align=\"center\" style=\"line-height:10px\"><img class=\"big\" src=\"https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7631/round_corner_top.png\" style=\"display: block; height: auto; border: 0; width: 680px; max-width: 100%;\" width=\"680\" alt=\"Top round corners\" title=\"Top round corners\"></div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-3\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"16.666666666666668%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:0px;line-height:0px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-2\" width=\"66.66666666666667%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:10px;line-height:10px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"paragraph_block block-2\" width=\"100%\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"color:#333333;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:15px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:18px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">Hello " + firstName + " " + lastName + ",</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">You can Login with this One Time Password</b></p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">This is your OTP: " + otp + "</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">Thank You.</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0;\">&nbsp;</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-3\" style=\"height:20px;line-height:20px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-3\" width=\"16.666666666666668%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:0px;line-height:0px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-4\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"image_block block-1\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\" style=\"width:100%;padding-right:0px;padding-left:0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"alignment\" align=\"center\" style=\"line-height:10px\"><img class=\"big\" src=\"https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7631/round_corner_bottom.png\" style=\"display: block; height: auto; border: 0; width: 680px; max-width: 100%;\" width=\"680\" alt=\"Bottom round corners\" title=\"Bottom round corners\"></div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-5\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:20px;line-height:20px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-6\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"16.666666666666668%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:0px;line-height:0px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-2\" width=\"66.66666666666667%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:35px;line-height:35px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-3\" width=\"16.666666666666668%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:0px;line-height:0px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t</td>\n" +
      "\t\t\t</tr>\n" +
      "\t\t</tbody>\n" +
      "\t</table><!-- End -->\n" +
      "</body>\n" +
      "\n" +
      "</html>"
  }).then((res: any) => {
    callback("", res);
  }).catch((error: any) => {
    console.log("error", error)
    callback(error, "");
  })
}


export async function sendResetPassword(firstName: string, lastName: string, email: any, resetPasswordLink: any, callback: any) {

  await transporter.sendMail({
    from: "Dre <noreply.dre@gmail.com>",
    to: email,
    subject: "DRE User : Change Password",
    html: "<!DOCTYPE html>\n" +
      "<html xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" lang=\"en\">\n" +
      "\n" +
      "<head>\n" +
      "\t<title></title>\n" +
      "\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n" +
      "\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->\n" +
      "\t<style>\n" +
      "\t\t* {\n" +
      "\t\t\tbox-sizing: border-box;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\tbody {\n" +
      "\t\t\tmargin: 0;\n" +
      "\t\t\tpadding: 0;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\ta[x-apple-data-detectors] {\n" +
      "\t\t\tcolor: inherit !important;\n" +
      "\t\t\ttext-decoration: inherit !important;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\t#MessageViewBody a {\n" +
      "\t\t\tcolor: inherit;\n" +
      "\t\t\ttext-decoration: none;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\tp {\n" +
      "\t\t\tline-height: inherit\n" +
      "\t\t}\n" +
      "\n" +
      "\t\t.desktop_hide,\n" +
      "\t\t.desktop_hide table {\n" +
      "\t\t\tmso-hide: all;\n" +
      "\t\t\tdisplay: none;\n" +
      "\t\t\tmax-height: 0px;\n" +
      "\t\t\toverflow: hidden;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\t.image_block img+div {\n" +
      "\t\t\tdisplay: none;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\t@media (max-width:700px) {\n" +
      "\n" +
      "\t\t\t.image_block img.big,\n" +
      "\t\t\t.row-content {\n" +
      "\t\t\t\twidth: 100% !important;\n" +
      "\t\t\t}\n" +
      "\n" +
      "\t\t\t.mobile_hide {\n" +
      "\t\t\t\tdisplay: none;\n" +
      "\t\t\t}\n" +
      "\n" +
      "\t\t\t.stack .column {\n" +
      "\t\t\t\twidth: 100%;\n" +
      "\t\t\t\tdisplay: block;\n" +
      "\t\t\t}\n" +
      "\n" +
      "\t\t\t.mobile_hide {\n" +
      "\t\t\t\tmin-height: 0;\n" +
      "\t\t\t\tmax-height: 0;\n" +
      "\t\t\t\tmax-width: 0;\n" +
      "\t\t\t\toverflow: hidden;\n" +
      "\t\t\t\tfont-size: 0px;\n" +
      "\t\t\t}\n" +
      "\n" +
      "\t\t\t.desktop_hide,\n" +
      "\t\t\t.desktop_hide table {\n" +
      "\t\t\t\tdisplay: table !important;\n" +
      "\t\t\t\tmax-height: none !important;\n" +
      "\t\t\t}\n" +
      "\t\t}\n" +
      "\t</style>\n" +
      "</head>\n" +
      "\n" +
      "<body style=\"background-color: #fff0e3; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;\">\n" +
      "\t<table class=\"nl-container\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff0e3;\">\n" +
      "\t\t<tbody>\n" +
      "\t\t\t<tr>\n" +
      "\t\t\t\t<td>\n" +
      "\t\t\t\t\t<table class=\"row row-1\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:30px;line-height:30px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"heading_block block-2\" width=\"100%\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h1 style=\"margin: 0; color: #8a3c90; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;\"><span class=\"tinyMce-placeholder\">Welcome to DRE</span></h1>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"divider_block block-3\" width=\"100%\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"alignment\" align=\"center\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"divider_inner\" style=\"font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;\"><span>&#8202;</span></td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-2\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"image_block block-1\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\" style=\"width:100%;padding-right:0px;padding-left:0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"alignment\" align=\"center\" style=\"line-height:10px\"><img class=\"big\" src=\"https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7631/round_corner_top.png\" style=\"display: block; height: auto; border: 0; width: 680px; max-width: 100%;\" width=\"680\" alt=\"Top round corners\" title=\"Top round corners\"></div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-3\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"16.666666666666668%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:0px;line-height:0px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-2\" width=\"66.66666666666667%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:10px;line-height:10px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"paragraph_block block-2\" width=\"100%\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"color:#333333;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:15px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:18px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">Hello " + firstName + " " + lastName + ",</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">Please click on the link below for change password.</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">Reset Pawssord Link : <a href='" + resetPasswordLink + "'>" + resetPasswordLink + "</a></p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">Thank You.</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0;\">&nbsp;</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-3\" style=\"height:20px;line-height:20px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-3\" width=\"16.666666666666668%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:0px;line-height:0px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-4\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"image_block block-1\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\" style=\"width:100%;padding-right:0px;padding-left:0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"alignment\" align=\"center\" style=\"line-height:10px\"><img class=\"big\" src=\"https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7631/round_corner_bottom.png\" style=\"display: block; height: auto; border: 0; width: 680px; max-width: 100%;\" width=\"680\" alt=\"Bottom round corners\" title=\"Bottom round corners\"></div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-5\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:20px;line-height:20px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-6\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"16.666666666666668%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:0px;line-height:0px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-2\" width=\"66.66666666666667%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:35px;line-height:35px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-3\" width=\"16.666666666666668%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:0px;line-height:0px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t</td>\n" +
      "\t\t\t</tr>\n" +
      "\t\t</tbody>\n" +
      "\t</table><!-- End -->\n" +
      "</body>\n" +
      "\n" +
      "</html>"
  }).then((res: any) => {
    callback("", res);
  }).catch((error: any) => {
    console.log("error", error)
    callback(error, "");
  })
}

let buttonUrl = "http://35.237.159.84/login"


export async function sendVerfiyDevice(firstName: string, lastName: string, email: any, authToken: any, expairyTokenTime: any, callback: any) {

  await transporter.sendMail({
    from: "Dre <noreply.dre@gmail.com>", // sender address
    to: email,
    subject: "DRE User : Verfiy Device", // Subject line
    html: "<!DOCTYPE html>\n" +
      "<html xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" lang=\"en\">\n" +
      "\n" +
      "<head>\n" +
      "\t<title></title>\n" +
      "\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n" +
      "\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->\n" +
      "\t<style>\n" +
      "\t\t* {\n" +
      "\t\t\tbox-sizing: border-box;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\tbody {\n" +
      "\t\t\tmargin: 0;\n" +
      "\t\t\tpadding: 0;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\ta[x-apple-data-detectors] {\n" +
      "\t\t\tcolor: inherit !important;\n" +
      "\t\t\ttext-decoration: inherit !important;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\t#MessageViewBody a {\n" +
      "\t\t\tcolor: inherit;\n" +
      "\t\t\ttext-decoration: none;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\tp {\n" +
      "\t\t\tline-height: inherit\n" +
      "\t\t}\n" +
      "\n" +
      "\t\t.desktop_hide,\n" +
      "\t\t.desktop_hide table {\n" +
      "\t\t\tmso-hide: all;\n" +
      "\t\t\tdisplay: none;\n" +
      "\t\t\tmax-height: 0px;\n" +
      "\t\t\toverflow: hidden;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\t.image_block img+div {\n" +
      "\t\t\tdisplay: none;\n" +
      "\t\t}\n" +
      "\n" +
      "\t\t@media (max-width:700px) {\n" +
      "\n" +
      "\t\t\t.image_block img.big,\n" +
      "\t\t\t.row-content {\n" +
      "\t\t\t\twidth: 100% !important;\n" +
      "\t\t\t}\n" +
      "\n" +
      "\t\t\t.mobile_hide {\n" +
      "\t\t\t\tdisplay: none;\n" +
      "\t\t\t}\n" +
      "\n" +
      "\t\t\t.stack .column {\n" +
      "\t\t\t\twidth: 100%;\n" +
      "\t\t\t\tdisplay: block;\n" +
      "\t\t\t}\n" +
      "\n" +
      "\t\t\t.mobile_hide {\n" +
      "\t\t\t\tmin-height: 0;\n" +
      "\t\t\t\tmax-height: 0;\n" +
      "\t\t\t\tmax-width: 0;\n" +
      "\t\t\t\toverflow: hidden;\n" +
      "\t\t\t\tfont-size: 0px;\n" +
      "\t\t\t}\n" +
      "\n" +
      "\t\t\t.desktop_hide,\n" +
      "\t\t\t.desktop_hide table {\n" +
      "\t\t\t\tdisplay: table !important;\n" +
      "\t\t\t\tmax-height: none !important;\n" +
      "\t\t\t}\n" +
      "\t\t}\n" +
      "\t</style>\n" +
      "</head>\n" +
      "\n" +
      "<body style=\"background-color: #fff0e3; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;\">\n" +
      "\t<table class=\"nl-container\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff0e3;\">\n" +
      "\t\t<tbody>\n" +
      "\t\t\t<tr>\n" +
      "\t\t\t\t<td>\n" +
      "\t\t\t\t\t<table class=\"row row-1\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:30px;line-height:30px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"heading_block block-2\" width=\"100%\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h1 style=\"margin: 0; color: #8a3c90; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;\"><span class=\"tinyMce-placeholder\">Welcome to DRE</span></h1>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"divider_block block-3\" width=\"100%\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"alignment\" align=\"center\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"divider_inner\" style=\"font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;\"><span>&#8202;</span></td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-2\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"image_block block-1\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\" style=\"width:100%;padding-right:0px;padding-left:0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"alignment\" align=\"center\" style=\"line-height:10px\"><img class=\"big\" src=\"https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7631/round_corner_top.png\" style=\"display: block; height: auto; border: 0; width: 680px; max-width: 100%;\" width=\"680\" alt=\"Top round corners\" title=\"Top round corners\"></div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-3\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"16.666666666666668%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:0px;line-height:0px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-2\" width=\"66.66666666666667%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:10px;line-height:10px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"paragraph_block block-2\" width=\"100%\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"color:#333333;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:15px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:18px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">Hello " + firstName + " " + lastName + ",</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">You have already logged in another devices.</b></p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">You want to log in with new device </p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\"><a href=" + `${buttonUrl}?${authToken}&&${expairyTokenTime}` + " target=\"_blank\"><button type=button id=btn>Approve</button></a></p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\"><a href=" + + "><button type=button>Rejected!</button></a></p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; margin-bottom: 16px;\">Thank You.</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0;\">&nbsp;</p>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-3\" style=\"height:20px;line-height:20px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-3\" width=\"16.666666666666668%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:0px;line-height:0px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-4\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"image_block block-1\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"pad\" style=\"width:100%;padding-right:0px;padding-left:0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"alignment\" align=\"center\" style=\"line-height:10px\"><img class=\"big\" src=\"https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7631/round_corner_bottom.png\" style=\"display: block; height: auto; border: 0; width: 680px; max-width: 100%;\" width=\"680\" alt=\"Bottom round corners\" title=\"Bottom round corners\"></div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-5\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:20px;line-height:20px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t<table class=\"row row-6\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
      "\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t<td>\n" +
      "\t\t\t\t\t\t\t\t\t<table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;\" width=\"680\">\n" +
      "\t\t\t\t\t\t\t\t\t\t<tbody>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-1\" width=\"16.666666666666668%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:0px;line-height:0px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-2\" width=\"66.66666666666667%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:35px;line-height:35px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"column column-3\" width=\"16.666666666666668%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"spacer_block block-1\" style=\"height:0px;line-height:0px;font-size:1px;\">&#8202;</div>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t\t\t\t\t</table>\n" +
      "\t\t\t\t\t\t\t\t</td>\n" +
      "\t\t\t\t\t\t\t</tr>\n" +
      "\t\t\t\t\t\t</tbody>\n" +
      "\t\t\t\t\t</table>\n" +
      "\t\t\t\t</td>\n" +
      "\t\t\t</tr>\n" +
      "\t\t</tbody>\n" +
      "\t</table><!-- End -->\n" +
      "</body>\n" +
      "\n" +
      "</html>"
  }).then((res: any) => {
    callback("", res);
  }).catch((error: any) => {
    console.log("error", error)
    callback(error, "");
  })
}
