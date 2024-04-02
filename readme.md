<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Finding_matches_in_a_list_of_strings_0"></a>Finding matches in a list of strings</h1>
<p class="has-line-data" data-line-start="2" data-line-end="3">You are given a <strong>list of strings</strong> for analysis and a <strong>list of patterns</strong> that need to be found within these strings. The patterns are defined as follows:</p>
<p class="has-line-data" data-line-start="4" data-line-end="9">defg: Should only match items that contain exactly “defg”.<br>
defg: Should only match items that end with “defg” and have anything before.<br>
defg: Should only match items that start with “defg” and have anything after.<br>
defg: Should only match items that contain “defg” between characters.<br>
defgdl: Should only match items that have anything before and after “defg” and end with “dl”.</p>
<h1 class="code-line" data-line-start=11 data-line-end=12 ><a id="Expected_output_11"></a>Expected output:</h1>
<p class="has-line-data" data-line-start="13" data-line-end="22">[<br>
{ defg: [ ‘defg’ ] },<br>
{ ’<em>defg’: [ ‘dksi siqsd defg’, ‘kkksl gjdefg’ ] },<br>
{ 'defg</em>': [ ‘defg kslf iidjg’, ‘defgkkdd irop’ ] },<br>
{<br>
’<em>defg</em>‘: [ ‘abc defg hijk’, ‘dksi defg adk’, ‘lssa defg bvz dl’ ]<br>
},<br>
{ ’<em>defg</em>dl’: [ ‘lssa defg bvz dl’ ] }<br>
]</p>
<h1 class="code-line" data-line-start=23 data-line-end=24 ><a id="Inputs_23"></a>Inputs:</h1>
<p class="has-line-data" data-line-start="25" data-line-end="39">list = [<br>
‘abc defg hijk’,<br>
‘ajg lsk lsir iirop’,<br>
‘ksk iidl ksjfl’,<br>
‘dksi defg adk’,<br>
‘kskfl’,<br>
‘defg kslf iidjg’,<br>
‘defgkkdd irop’,<br>
‘iris llsd hfh’,<br>
‘dksi siqsd defg’,<br>
‘kkksl gjdefg’,<br>
‘defg’,<br>
‘lssa defg bvz dl’<br>
];</p>
<p class="has-line-data" data-line-start="40" data-line-end="47">patterns = [<br>
‘defg’,<br>
’<em>defg’,<br>
'defg</em>',<br>
’<em>defg</em>‘,<br>
’<em>defg</em>dl’<br>
];</p>
<p class="has-line-data" data-line-start="49" data-line-end="50">Challenge by @LuccasJSantos</p>