# -*- coding: utf-8 -*-
import scrapy

# Importar la clase donde almacenar los resultados
from facebook.items import FacebookItem




class FaceSpider(scrapy.Spider):
    name = 'facespaider'
    start_urls = ['https://www.facebook.com/Wilfred.Lemus/friends?source_ref=pb_friends_tl']

    def parse(self, response):
        print "--------------AQUI ------------------ %s" %response
        # for url in response.css('ul li a::attr("href")').re('.*/category/.*'):
        #     yield scrapy.Request(response.urljoin(url), self.parse_titles)

    # def parse_titles(self, response):
    #     for post_title in response.css('div.entries > ul > li a::text').extract():
    #         yield {'title': post_title}


# class FaceSpider(CrawlSpider):

#     # Nombre de la araña.
#     name = 'facespaider'

#     # Dominios en los que el crawler tiene permiso a acceder
#     allowed_domains = ['facebook.com']

#     # La direccion de inicio para el crawler
#     start_urls = ['https://www.facebook.com/Wilfred.Lemus/friends?source_ref=pb_friends_tl']

#     # Regla para diferenciar los enlaces de libros y función que se les aplica
#     rules = [Rule(SgmlLinkExtractor(allow=['/libro/detalle/\d+']), 'parse_book')]

#     def parse_book(self, response):
#         """ Parser para las pagina de detalle de los libros"""
#         sel = Selector(response)

#         # Creamos un nuevo libro y asignamos los valores extraidos a
#         # los campos correspondientes.
#         friends = FacebookItem()
#         name = sel.xpath("//div[@class='negrita aut_sec']/a/text()").extract()
#         url = sel.xpath("//div[@id='titulo_libro']/text()[normalize-space()]").extract()

#         # Con Strip eliminamos tabulaciones y linea nueva.
#         friends['url']  = url[0].strip("\t\n\r")
#         friends['name'] = name[0].strip("\t\n\r")

#         return friends