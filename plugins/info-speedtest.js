import _0x4206a3 from'child_process';import{promisify}from'util';let exec=promisify(_0x4206a3['exec'])['bind'](_0x4206a3),handler=async _0x54f9d2=>{await conn['reply'](_0x54f9d2['chat'],global['wait'],_0x54f9d2);let _0x253212;try{_0x253212=await exec('python3\x20speed.py');}catch(_0x49f3bf){_0x253212=_0x49f3bf;}finally{let {stdout:_0x1735b0,stderr:_0x1ff1c8}=_0x253212;if(_0x1735b0['trim']())_0x54f9d2['reply'](_0x1735b0);if(_0x1ff1c8['trim']())_0x54f9d2['reply'](_0x1ff1c8);}};handler['help']=['speedtest'],handler['tags']=['info'],handler['command']=/^(speedtest?|test?speed)$/i,handler['register']=!![],handler['premium']=!![];export default handler;