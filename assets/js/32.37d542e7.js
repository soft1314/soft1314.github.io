(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{358:function(s,a,n){"use strict";n.r(a);var e=n(4),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"记一次oracle归档日志异常增长问题的排查过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记一次oracle归档日志异常增长问题的排查过程"}},[s._v("#")]),s._v(" 记一次Oracle归档日志异常增长问题的排查过程")]),s._v(" "),a("p",[s._v("Oracle归档日志是Oracle数据库的重要功能，用于将数据库的重做日志文件（Redo Log）保存到归档日志文件（Archive Log）中。归档日志的作用是提供数据库的备份和恢复功能，以及支持数据库的持续性和数据完整性。\n当数据库处于归档模式时，数据库引擎会将已经写满的重做日志文件保存到归档日志文件中，而不是覆盖已有的重做日志。这样可以确保数据库的完整性，并且可以使用归档日志文件进行数据库的恢复操作。\n归档日志对于数据库的备份和恢复非常重要。通过定期备份归档日志文件，可以保证数据库在发生故障时能够进行恢复。同时，归档日志还允许将数据库恢复到特定的时间点，以满足特定业务需求。")]),s._v(" "),a("h2",{attrs:{id:"基础操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础操作"}},[s._v("#")]),s._v(" 基础操作")]),s._v(" "),a("p",[s._v("在Oracle数据库中，可以通过以下步骤来设置和查看归档日志空间：")]),s._v(" "),a("ol",[a("li",[s._v("首先，确认数据库是否处于归档模式。可以通过以下SQL语句查询：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SQL> SELECT log_mode FROM v$database;\nLOG_MODE\n  ARCHIVELOG\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果log_mode的值为ARCHIVELOG，则数据库处于归档模式；如果值为NOARCHIVELOG，则数据库未启用归档模式。")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("如果数据库未启用归档模式，可以通过以下SQL语句将其切换到归档模式：\n修改归档模式的操作只能在 mount 状态下进行，不能处于 open 状态")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SQL> shutdown immediate\n数据库已经关闭。\n已经卸载数据库。\nORACLE 例程已经关闭。\nSQL> startup mount\nORACLE 例程已经启动。\nTotal System Global Area 3290345472 bytes\nFixed Size                  2180224 bytes\nVariable Size            2382367616 bytes\nDatabase Buffers          889192448 bytes\nRedo Buffers               16605184 bytes\n数据库装载完毕。\nSQL> alter database archivelog;\n数据库已更改。\nSQL> alter database open;\n数据库已更改。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("确认数据库已切换到归档模式后，可以设置归档日志空间的大小。可以通过以下SQL语句设置归档日志空间的大小为50MB（根据需求进行调整）：\n52428800 = 50 * 1024 * 1024")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SQL> alter system set db_recovery_file_dest_size=  52428800;\n系统已更改。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("使用以下SQL语句查询当前归档日志空间的使用情况：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select name,\n       space_limit / 1024 / 1024 / 1024 || 'GB' as 空间限制,\n       space_used / 1024 / 1024 / 1024 || 'GB' 已使用\n  from v$recovery_file_dest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这将显示归档日志目标的名称、空间限制和已使用的空间。")]),s._v(" "),a("h2",{attrs:{id:"问题发生"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题发生"}},[s._v("#")]),s._v(" 问题发生")]),s._v(" "),a("p",[s._v("下面进入对一次因归档日志空间占满，导致系统停止服务的故障在某个阳光明媚的周末发生后的处理过程。")]),s._v(" "),a("ol",[a("li",[s._v("系统停止响应，数据库登录有以下提示：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ORA-00257:archiver error. Connect internal only,until freed\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("很明显，归档日志满了，立即删除归档日志，保留最近3天。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("rman\nRMAN> connect target 用户名/密码;\n连接到目标数据库: ORCL (DBID=1616110362)\nRMAN> delete archivelog until time 'sysdate-3';\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("问题未解决，查看归档空间占用情况。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select name,\n       space_limit / 1024 / 1024 / 1024 || 'GB' as 空间限制,\n       space_used / 1024 / 1024 / 1024 || 'GB' 已使用\n  from v$recovery_file_dest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("发现占用空间未释放，接着删除所有归档：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("RMAN> delete archivelog all;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("系统恢复。过了几个小时，问题再次发生。")]),s._v(" "),a("li",[s._v("再次删除所有归档日志，系统恢复，开始排查问题原因。")])]),s._v(" "),a("h2",{attrs:{id:"排查过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排查过程"}},[s._v("#")]),s._v(" 排查过程")]),s._v(" "),a("ol",[a("li",[s._v("按天统计")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select to_char(COMPLETION_TIME, 'yyyymmdd'), count(*)\n  from v$archived_log t\n where COMPLETION_TIME > sysdate - 7\n group by to_char(COMPLETION_TIME, 'yyyymmdd')\n order by to_char(COMPLETION_TIME, 'yyyymmdd');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这是一个查询语句，用于查询过去7天内完成的归档日志数量，并按照日期进行分组和排序。\n发现前6天正常，当天归档日志异常增长。\n2. 按小时统计")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select to_char(FIRST_TIME, 'yyyymmddhh24'), count(*)\n  from sys.v_$archived_log t\n where t.FIRST_TIME > trunc(sysdate)\n group by to_char(FIRST_TIME, 'yyyymmddhh24')\n order by to_char(FIRST_TIME, 'yyyymmddhh24')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("该SQL用于查询当天开始的归档日志数量，并按照小时进行分组和排序。\n3. 按天和小时综合统计")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT    TO_CHAR(FIRST_TIME,'YYYY-MM-DD') DAY,\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'00',1,0)),'999') \"00\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'01',1,0)),'999') \"01\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'02',1,0)),'999') \"02\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'03',1,0)),'999') \"03\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'04',1,0)),'999') \"04\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'05',1,0)),'999') \"05\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'06',1,0)),'999') \"06\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'07',1,0)),'999') \"07\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'08',1,0)),'999') \"08\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'09',1,0)),'999') \"09\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'10',1,0)),'999') \"10\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'11',1,0)),'999') \"11\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'12',1,0)),'999') \"12\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'13',1,0)),'999') \"13\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'14',1,0)),'999') \"14\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'15',1,0)),'999') \"15\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'16',1,0)),'999') \"16\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'17',1,0)),'999') \"17\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'18',1,0)),'999') \"18\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'19',1,0)),'999') \"19\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'20',1,0)),'999') \"20\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'21',1,0)),'999') \"21\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'22',1,0)),'999') \"22\",\n                TO_CHAR(SUM(DECODE(TO_CHAR(FIRST_TIME,'HH24'),'23',1,0)),'999') \"23\"\nFROM V$LOG_HISTORY\nGROUP BY TO_CHAR(FIRST_TIME,'YYYY-MM-DD') \nORDER BY 1 DESC;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("此SQL语句，用于统计每天每个小时的日志数量，并按照日期倒序排序\n3. 根据按小时统计分析，发现归档日志集中在当天2个时间段，其他时间段基本正常。怀疑是在相关时间自动执行的后台任务造成，经深入排查予以否认。\n4. AWR报告生成")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sqlplus /nolog\nconn / as sysdba\n@?/rdbms/admin/awrrpt.sql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("报告生成失败，原因是没有快照（Snap）\n5. 分析没有快照（Snap）原因，网上说一般是SYSAUX表空间不足造成的，查询表空间占用情况，果然满了\n6. 清理表空间")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select distinct 'truncate table ' || segment_name || ';',\n                s.bytes / 1024 / 1024 MB\n  from dba_segments s\n where s.segment_name like 'WRH$%'\n   and segment_type in ('TABLE PARTITION', 'TABLE')\n   and s.bytes / 1024 / 1024 > 100\n order by s.bytes / 1024 / 1024 desc;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("此SQL可生成清理以 'WRH$' 开头的、大于100MB的表的SQL。生成后执行，完成表空间清理。")]),s._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[s._v("问题解决，真是阴差阳错。")])]),s._v(" "),a("p",[s._v("猜测的原因：\n"),a("strong",[s._v("因SYSAUX表空间满，造成连锁反应，表现为归档日志异常增长。")])]),s._v(" "),a("h2",{attrs:{id:"一般情况分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一般情况分析"}},[s._v("#")]),s._v(" 一般情况分析")]),s._v(" "),a("p",[s._v("归档日志增长一般是DML操作大量数据造成的，而由SYSAUX表空间满的原因所造成的则比较少见，故记之。")]),s._v(" "),a("p",[s._v("排查归档日志暴增的方法，一般包括以下三个手段：")]),s._v(" "),a("ol",[a("li",[s._v("SQL语句")]),s._v(" "),a("li",[s._v("AWR")]),s._v(" "),a("li",[s._v("挖掘归档日志")])]),s._v(" "),a("hr"),s._v(" "),a("p",[a("strong",[s._v("本文到此结束，感谢您的观看！！！")])])])}),[],!1,null,null,null);a.default=t.exports}}]);