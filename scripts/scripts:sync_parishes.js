{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red225\green255\blue231;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c90196\c100000\c92549;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrt\brdrnil \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 #!/usr/bin/env node\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 const fs = require('fs');\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 const path = require('path');\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 const \{ execFileSync \} = require('child_process');\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 const ROOT = path.resolve(__dirname, '..');\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 const DIOCESAN_SEED_PATH = path.join(ROOT, 'data', 'diocesan-seed.json');\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 const METRO_SEED_PATH = path.join(ROOT, 'data', 'metro-seeds.json');\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 const OUTPUT_PATH = path.join(ROOT, 'data', 'parishes.json');\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 function readJson(filePath) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   return JSON.parse(fs.readFileSync(filePath, 'utf8'));\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 function safeId(value) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   return value\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     .toLowerCase()\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     .replace(/[^a-z0-9]+/g, '-')\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     .replace(/(^-|-$)/g, '');\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 function parseLocation(address) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   const parts = address.split(',').map((part) => part.trim());\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   const city = parts.length > 1 ? parts[1] : 'Unknown';\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   const stateZip = parts.length > 2 ? parts[2] : '';\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   const zipMatch = stateZip.match(/(\\d\{5\})/);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   return \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     location: city && stateZip ? `$\{city\}, $\{stateZip.replace(/\\d\{5\}/, '').trim()\}`.replace(/,\\s*$/, '') : city,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     zip: zipMatch ? zipMatch[1] : '00000'\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   \};\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 async function fetchJson(url) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   try \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     const response = await fetch(url);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     if (!response.ok) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       throw new Error(`status $\{response.status\}`);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     return await response.json();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   \} catch (fetchError) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     try \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       const raw = execFileSync('curl', ['-s', String(url)], \{ encoding: 'utf8' \});\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       return JSON.parse(raw);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     \} catch (curlError) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       throw new Error(`fetch failed ($\{fetchError.message\}); curl fallback failed ($\{curlError.message\})`);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 function makeDiocesanParish(record) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   const parsed = parseLocation(record.address);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   return \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     id: safeId(record.name),\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     name: record.name,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     location: parsed.location,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     zip: parsed.zip,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     details: record.details || [],\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     confessionHoursPerWeek: record.confessionHoursPerWeek ?? 1,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     adorationHoursPerWeek: record.adorationHoursPerWeek ?? 1,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     reverentImageSignals: 2,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     onlineReviewScore: 4,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     liturgyNotes: [\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       `Imported from diocesan directory: $\{record.source_url\}`,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       `Website: $\{record.website\}`\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     ],\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     webSignals: [\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       'Data source: official diocesan directory',\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       'Google enrichment pending API key configuration'\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     ],\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     communityNotes: [],\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     source: 'diocese'\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   \};\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 async function fetchGooglePlaces(metros, apiKey) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   const collected = [];\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   for (const metro of metros) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     const url = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json');\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     url.searchParams.set('location', `$\{metro.lat\},$\{metro.lng\}`);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     url.searchParams.set('radius', String(metro.radiusMeters || 20000));\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     url.searchParams.set('keyword', 'Catholic parish');\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     url.searchParams.set('key', apiKey);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     const payload = await fetchJson(url);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     for (const place of payload.results || []) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       const vicinity = place.vicinity || `$\{metro.label\}`;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       const parsed = parseLocation(vicinity);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       collected.push(\{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0         id: safeId(`$\{place.place_id || place.name\}`),\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0         name: place.name,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0         location: parsed.location || metro.label,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0         zip: parsed.zip,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0         details: [],\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0         confessionHoursPerWeek: 1,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0         adorationHoursPerWeek: 1,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0         reverentImageSignals: 1,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0         onlineReviewScore: Number(place.rating || 4),\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0         liturgyNotes: ['Imported from Google Places'],\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0         webSignals: [`Google rating count: $\{place.user_ratings_total || 0\}`],\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0         communityNotes: [],\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0         source: 'google',\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0         external: \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0           place_id: place.place_id,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0           types: place.types || []\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0         \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       \});\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   return collected;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 function mergeParishes(parishes) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   const byKey = new Map();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   parishes.forEach((parish) => \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     const key = `$\{parish.name\}|$\{parish.zip\}`.toLowerCase();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     const existing = byKey.get(key);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     if (!existing) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       byKey.set(key, parish);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       return;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     const merged = \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       ...existing,\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       details: Array.from(new Set([...(existing.details || []), ...(parish.details || [])])),\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       confessionHoursPerWeek: Math.max(existing.confessionHoursPerWeek || 0, parish.confessionHoursPerWeek || 0),\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       adorationHoursPerWeek: Math.max(existing.adorationHoursPerWeek || 0, parish.adorationHoursPerWeek || 0),\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       onlineReviewScore: Math.max(existing.onlineReviewScore || 0, parish.onlineReviewScore || 0),\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       liturgyNotes: Array.from(new Set([...(existing.liturgyNotes || []), ...(parish.liturgyNotes || [])])),\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       webSignals: Array.from(new Set([...(existing.webSignals || []), ...(parish.webSignals || [])])),\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       source: existing.source === parish.source ? existing.source : 'merged'\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     \};\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     byKey.set(key, merged);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   \});\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   return Array.from(byKey.values());\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 async function main() \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   const diocesan = readJson(DIOCESAN_SEED_PATH).map(makeDiocesanParish);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   const metros = readJson(METRO_SEED_PATH);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   const apiKey = process.env.GOOGLE_PLACES_API_KEY;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   let google = [];\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   if (apiKey) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     try \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       google = await fetchGooglePlaces(metros, apiKey);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       console.log(`Fetched $\{google.length\} places from Google Places.`);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     \} catch (error) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0       console.warn(`Google fetch failed, continuing with diocesan seed only. $\{error.message\}`);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   \} else \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0     console.log('GOOGLE_PLACES_API_KEY not set; generating data from diocesan seed only.');\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   const merged = mergeParishes([...diocesan, ...google]);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   fs.writeFileSync(OUTPUT_PATH, JSON.stringify(merged, null, 2));\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   console.log(`Wrote $\{merged.length\} parishes to $\{path.relative(ROOT, OUTPUT_PATH)\}`);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 main().catch((error) => \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   console.error(error);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0   process.exitCode = 1;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat2 \trbrdrl\brdrnil \trbrdrt\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth29140\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf0 \});\cell \lastrow\row
}