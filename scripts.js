
INSERT INTO BIBLIOTECAS VALUES('B01', 'Biblioteca Municipal de Ambato', 'Av. Bolívar y Montalvo');
INSERT INTO BIBLIOTECAS VALUES('B02', 'Biblioteca de la Universidad Técnica de Ambato', 'Av. Los Shyris y Río Payamino');
INSERT INTO LIBROS VALUES('L01', 'Cien años de soledad', 'Novela', 1967, 'B01'), ('L02', 'El alquimista', 'Fábula', 1988, 'B01');
INSERT INTO LIBROS VALUES('L03', 'El principito', 'Cuento', 1943, 'B02')
INSERT INTO LIBROS VALUES('L04', 'La metamorfosis', 'Novela corta', 1915, 'B02');

INSERT INTO AUTORES VALUES('A01', 'Gabriel', 'García Márquez', 'Colombia', TO_DATE('06/03/1927', 'DD/MM/YYYY'));
INSERT INTO AUTORES VALUES('A02', 'Paulo', 'Coelho', 'Brasil', TO_DATE('24/08/1947', 'DD/MM/YYYY'));
INSERT INTO AUTORES VALUES('A03', 'Antoine de', 'Saint-Exupéry', 'Francia', TO_DATE('29/06/1900', 'DD/MM/YYYY'));
INSERT INTO AUTORES VALUES('A04', 'Franz', 'Kafka', 'República Checa', TO_DATE('03/07/1883', 'DD/MM/YYYY'));
INSERT INTO LIBROS_AUTORES VALUES ('L01', 'A01');
INSERT INTO LIBROS_AUTORES VALUES('L02', 'A02');
INSERT INTO LIBROS_AUTORES VALUES('L03', 'A03');
INSERT INTO LIBROS_AUTORES VALUES('L04', 'A04');

