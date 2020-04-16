

--DATA PRAZO + 2 dias--
--Comando SQL (Oracle)

SELECT '1' codAttributeCustomValue , 
to_char(
    case when to_char(TO_DATE('{Formulario.campoData}')  +2,'DY', 'nls_language=''BRAZILIAN PORTUGUESE''') = 'SÁB' 
    then TO_DATE('{Formulario.campoData}') +4 else (
        case when to_char(TO_DATE('{Formulario.campoData}') +2,'DY', 'nls_language=''BRAZILIAN PORTUGUESE''') = 'DOM' 
        then TO_DATE('{Formulario.campoData}') +4 else TO_DATE('{Formulario.data}') +3 
        end) 
    end, 'DD/MM/YYYY') DsAttributeValueName FROM DUAL




--VERIFICA SE DATA E FERIADO
--Comando SQL (Oracle)

select  CodHoliday CodAttributeCustomValue , DsHolidayTitle,  to_char(DtHoliday,'DD/MM/YYYY') DsAttributeValueName  from wfHOLIDAY 
where trunc(DtHoliday) = '{Formulario.campoData}'



