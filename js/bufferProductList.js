let bufferProducts ={
    list: [
        {
          "name": "ACES",
            "casNo": "7365-82-4",
          "empiricalFormula": "C<sub>4</sub>H<sub>10</sub>N<sub>2</sub>O<sub>4</sub>S",
            "formulaWeight": "182.2",
            "phRange": "6.1 - 7.5",
            "pKa": "6.8"
        },
        {
            "name": "ADA",
            "casNo": "26239-55-4",
          "empiricalFormula": "C<sub>6</sub>H<sub>10</sub>N<sub>2</sub>O<sub>5</sub>",
            "formulaWeight": "190.15",
            "phRange": "6.0 - 7.2",
            "pKa": "(1) 1.59 (2) 2.48 (3) 6.84"
        },
        {
            "name": "ADA disodium salt",
            "casNo": "41689-31-0",
            "empiricalFormula": "C<sub>6</sub>H<sub>8</sub>N<sub>2</sub>Na<sub>2</sub>O<sub>5</sub>",
            "formulaWeight": "234.12",
            "phRange": "6.0 - 7.2",
            "pKa": "(1) 1.59 (2) 2.48 (3) 6.84"
        },
        {
            "name": "Ammonium acetate",
            "casNo": "631-61-8",
            "empiricalFormula": "C<sub>2</sub>H<sub>7</sub>NO<sub>2</sub>",
            "formulaWeight": "77.08",
            "phRange": "3.75 - 5.75",
            "pKa": "4.75"
        },
        {
            "name": "AMPSO",
            "casNo": "68399-79-1",
          "empiricalFormula": "C<sub>7</sub>H<sub>17</sub>NO<sub>5</sub>S",
            "formulaWeight": "227.28",
            "phRange": "8.3 - 9.7",
            "pKa": "9.1"
        },
        {
            "name": "AMPSO sodium salt",
            "casNo": "102029-60-7",
            "empiricalFormula": "C<sub>7</sub>H<sub>16</sub>NNaO<sub>5</sub>S",
            "formulaWeight": "249.26",
            "phRange": "8.3 - 9.7",
            "pKa": "9.1"
        },
        {
            "name": "BES",
            "casNo": "10191-18-1",
          "empiricalFormula": "C<sub>6</sub>H<sub>15</sub>NO<sub>5</sub>S",
            "formulaWeight": "213.25",
            "phRange": "6.4 - 7.8",
            "pKa": "7.1"
        },
        {
            "name": "BES sodium salt",
            "casNo": "66992-27-6",
          "empiricalFormula": "C<sub>6</sub>H<sub>14</sub>NNaO<sub>5</sub>S",
            "formulaWeight": "235.23",
            "phRange": "6.4 - 7.8",
            "pKa": "7.2"
        },
        {
            "name": "Bicine",
            "casNo": "150-25-4",
          "empiricalFormula": "C<sub>6</sub>H<sub>13</sub>NO<sub>4</sub>",
            "formulaWeight": "163.17",
            "phRange": "7.6 - 9.0",
            "pKa": "(1) 2.0"
        },
        {
            "name": "BIS-TRIS",
            "casNo": "6976-37-0",
          "empiricalFormula": "C<sub>8</sub>H<sub>19</sub>NO<sub>5</sub>",
            "formulaWeight": "209.24",
            "phRange": "5.8 - 7.2",
            "pKa": "6.5"
        },
        {
            "name": "BIS-TRIS hydrochloride",
            "casNo": "124763-51-5",
          "empiricalFormula": "C<sub>8</sub>H<sub>19</sub>NO<sub>5</sub> HCl",
            "formulaWeight": "245.7",
            "phRange": "5.8 - 7.2",
            "pKa": "6.5"
        },
        {
            "name": "BIS-TRIS propane",
            "casNo": "64431-96-5",
          "empiricalFormula": "C<sub>11</sub>H<sub>26</sub>N<sub>2</sub>O<sub>6</sub>",
            "formulaWeight": "282.33",
            "phRange": "6.3 - 9.5",
            "pKa": "(1) 6.65"
        },
        {
            "name": "Boric acid",
            "casNo": "10043-35-3",
          "empiricalFormula": "H<sub>3</sub>BO<sub>3</sub>",
            "formulaWeight": "61.83",
            "phRange": "8.24 - 10.24",
            "pKa": "9.237"
        },
        {
            "name": "CABS",
            "casNo": "161308-34-5",
          "empiricalFormula": "C<sub>10</sub>H<sub>21</sub>NO<sub>3</sub>S",
            "formulaWeight": "235.34",
            "phRange": "10.0 - 11.4",
            "pKa": "10.7"
        },
        {
            "name": "Cacodylic acid",
            "casNo": "75-60-5",
            "empiricalFormula": "C<sub>2</sub>H<sub>7</sub>AsO<sub>2</sub>",
            "formulaWeight": "138.00",
            "phRange": "5.22 - 7.22",
            "pKa": "6.22"
        },
        {
            "name": "Calcium acetate hydrate",
            "casNo": "114460-21-8",
            "empiricalFormula": "C<sub>4</sub>H<sub>6</sub>CaO<sub>4</sub> &#8226; xH<sub>2</sub>O",
            "formulaWeight": "158.17 (anhydrous basis)",
            "phRange": "3.75 - 5.75",
            "pKa": "4.75"
        },
        {
            "name": "Calcium carbonate",
            "casNo": "471-34-1",
            "empiricalFormula": "CCaO<sub>3</sub>",
            "formulaWeight": "100.09",
            "phRange": "8 - 10",
            "pKa": "9"
        },
        {
            "name": "Calcium phosphate dibasic",
            "casNo": "7757-93-9",
            "empiricalFormula": "CaHPO<sub>4</sub>",
            "formulaWeight": "136.06",
            "phRange": "0.8 - 2.8",
            "pKa": "1.8"
        },
        {
            "name": "CAPS",
            "casNo": "1135-40-6",
          "empiricalFormula": "C<sub>9</sub>H<sub>19</sub>NO<sub>3</sub>S",
            "formulaWeight": "221.32",
            "phRange": "9.5 - 11.5",
            "pKa": "10.5"
        },
        {
            "name": "CAPSO",
            "casNo": "73463-39-5",
          "empiricalFormula": "C<sub>9</sub>H<sub>19</sub>NO<sub>4</sub>S",
            "formulaWeight": "237.32",
            "phRange": "8.9 - 10.3",
            "pKa": "9.83"
        },
        {
            "name": "CAPSO sodium salt",
            "casNo": "102601-34-3",
          "empiricalFormula": "C<sub>9</sub>H<sub>18</sub>NNaO<sub>4</sub>S",
            "formulaWeight": "259.3",
            "phRange": "8.9 - 10.3",
            "pKa": "9.6"
        },
        {
            "name": "CHES",
            "casNo": "103-47-9",
          "empiricalFormula": "C<sub>8</sub>H<sub>17</sub>NO<sub>3</sub>S",
            "formulaWeight": "207.29",
            "phRange": "8.6 - 10.0",
            "pKa": "9.3"
        },
        {
            "name": "Citric acid",
            "casNo": "77-92-9",
            "empiricalFormula": "C<sub>6</sub>H<sub>8</sub>O<sub>7</sub>",
            "formulaWeight": "192.12",
            "phRange": "2.2-6.5",
            "pKa": "(1) 3.13"
        },
        {
            "name": "Citric acid monohydrate",
            "casNo": "5949-29-1",
            "empiricalFormula": "C<sub>6</sub>H<sub>8</sub>O<sub>7</sub> &#8226; H<sub>2</sub>O",
            "formulaWeight": "210.14",
            "phRange": "2.2-6.6",
            "pKa": "(1) 3.13"
        },
        {
            "name": "Citric acid trisodium salt",
            "casNo": "68-04-2",
            "empiricalFormula": "C<sub>6</sub>H<sub>5</sub>Na<sub>3</sub>O<sub>7</sub>",
            "formulaWeight": "258.07",
            "phRange": "2.2-6.7",
            "pKa": "(1) 3.13"
        },
        {
            "name": "DIPSO",
            "casNo": "68399-80-4",
          "empiricalFormula": "C<sub>7</sub>H<sub>17</sub>NO<sub>6</sub>S",
            "formulaWeight": "243.28",
            "phRange": "7.0 - 8.2",
            "pKa": "7.6"
        },
        {
            "name": "EPPS",
            "casNo": "16052-06-5",
          "empiricalFormula": "C<sub>9</sub>H<sub>20</sub>N<sub>2</sub>O<sub>4</sub>S",
            "formulaWeight": "252.33",
            "phRange": "7.3 - 8.7",
            "pKa": "8.0"
        },
        {
            "name": "Ethanolamine hydrochloride",
            "casNo": "2002-24-6",
          "empiricalFormula": "C<sub>2</sub>H<sub>7</sub>NO &#8226; HCl",
            "formulaWeight": "97.54",
            "phRange": "8.5 - 10.5",
            "pKa": "9.5"
        },
        {
            "name": "Glycolic acid",
            "casNo": "79-14-1",
            "empiricalFormula": "C<sub>2</sub>H<sub>4</sub>O<sub>3</sub>",
            "formulaWeight": "76.05",
            "phRange": "2.83 - 4.83",
            "pKa": "3.83"
        },
        {
            "name": "HEPBS",
            "casNo": "161308-36-7",
          "empiricalFormula": "C<sub>10</sub>H<sub>22</sub>N<sub>2</sub>O<sub>4</sub>S",
            "formulaWeight": "266.36",
            "phRange": "7.6 - 9.0",
            "pKa": "8.3"
        },
        {
            "name": "HEPES",
            "casNo": "7365-45-9",
          "empiricalFormula": "C<sub>8</sub>H<sub>18</sub>N<sub>2</sub>O<sub>4</sub>S",
            "formulaWeight": "238.3",
            "phRange": "6.8 - 8.2",
            "pKa": "(1) 3.0 (2) 7.6"
        },
        {
            "name": "HEPES hemisodium salt",
            "casNo": "103404-87-1",
          "empiricalFormula": "C<sub>8</sub>H<sub>17.5</sub>N<sub>2</sub>O<sub>4</sub>S &#8226; 0.5Na",
            "formulaWeight": "249.3",
            "phRange": "6.8 - 8.2",
            "pKa": "(1) 3.0 (2) 7.6"
        },
        {
            "name": "HEPES potassium salt",
            "casNo": "82207-62-3",
          "empiricalFormula": "C<sub>8</sub>H<sub>17</sub>KN<sub>2</sub>O<sub>4</sub>S",
            "formulaWeight": "276.39",
            "phRange": "6.8 - 8.2",
            "pKa": "(1) 3.0 (2) 7.6"
        },
        {
            "name": "HEPES sodium salt",
            "casNo": "75277-39-3",
          "empiricalFormula": "C<sub>8</sub>H<sub>17</sub>N<sub>2</sub>NaO<sub>4</sub>S",
            "formulaWeight": "260.29",
            "phRange": "6.8 - 8.2",
            "pKa": "7.5"
        },
        {
            "name": "Imidazole",
            "casNo": "288-32-4",
          "empiricalFormula": "C<sub>3</sub>H<sub>4</sub>N<sub>2</sub>",
            "formulaWeight": "68.08",
            "phRange": "5.99 - 7.99",
            "pKa": "6.99"
        },
        {
            "name": "Imidazole hydrochloride",
            "casNo": "1467-16-9",
          "empiricalFormula": "C<sub>3</sub>H<sub>4</sub>N<sub>2</sub> &#8226; HCl",
            "formulaWeight": "104.54",
            "phRange": "6.1 - 8.1",
            "pKa": "7.1"
        },
        {
            "name": "Magnesium acetate tetrahydrate",
            "casNo": "16674-78-5",
            "empiricalFormula": "C<sub>4</sub>H<sub>6</sub>MgO<sub>4</sub> &#8226; <sub>4</sub>H<sub>2</sub>O",
            "formulaWeight": "214.45",
            "phRange": "3.54 - 5.54",
            "pKa": "4.54"
        },
        {
            "name": "MES",
            "casNo": "4432-31-9",
          "empiricalFormula": "C<sub>6</sub>H<sub>13</sub>NO<sub>4</sub>S",
            "formulaWeight": "195.24",
            "phRange": "5.5 - 6.7",
            "pKa": "6.3"
        },
        {
            "name": "MES hemisodium salt",
            "casNo": "117961-21-4",
          "empiricalFormula": "C<sub>6</sub>H<sub>13</sub>NO<sub>4</sub>S&#8226;0.5Na",
            "formulaWeight": "206.73",
            "phRange": "5.5 - 6.7",
            "pKa": "6.3"
        },
        {
            "name": "MES hydrate",
            "casNo": "1266615-59-1",
            "empiricalFormula": "C<sub>6</sub>H<sub>13</sub>NO<sub>4</sub>S &#8226; xH<sub>2</sub>O",
            "formulaWeight": "195.24 (anhydrous basis)",
            "phRange": "5.5 - 6.7",
            "pKa": "6.1"
        },
        {
            "name": "MES monohydrate",
            "casNo": "145224-94-8",
          "empiricalFormula": "C<sub>6</sub>H<sub>13</sub>NO<sub>4</sub>S &#8226; H2O",
            "formulaWeight": "213.25",
            "phRange": "5.5 - 6.7",
            "pKa": "6.3"
        },
        {
            "name": "MES potassium salt",
            "casNo": "39946-25-3",
          "empiricalFormula": "C<sub>6</sub>H<sub>12</sub>KNO<sub>4</sub>S",
            "formulaWeight": "233.33",
            "phRange": "5.5 - 6.7",
            "pKa": "6.3"
        },
        {
            "name": "MES sodium salt",
            "casNo": "71119-23-8",
          "empiricalFormula": "C<sub>6</sub>H<sub>12</sub>NNaO<sub>4</sub>S",
            "formulaWeight": "217.22",
            "phRange": "5.5 - 6.7",
            "pKa": "6.3"
        },
        {
            "name": "MOBS",
            "casNo": "115724-21-5",
          "empiricalFormula": "C<sub>8</sub>H<sub>17</sub>NO<sub>4</sub>S",
            "formulaWeight": "223.29",
            "phRange": "6.9 - 8.3",
            "pKa": "7.6"
        },
        {
            "name": "MOPS",
            "casNo": "1132-61-2",
          "empiricalFormula": "C<sub>7</sub>H<sub>15</sub>NO<sub>4</sub>S",
            "formulaWeight": "209.26",
            "phRange": "6.5 - 7.9",
            "pKa": "7.2"
        },
        {
            "name": "MOPS hemisodium salt",
            "casNo": "117961-20-3",
          "empiricalFormula": "C<sub>7</sub>H<sub>14.5</sub>NO<sub>4</sub>S &#8226; 0.5Na",
            "formulaWeight": "220.25",
            "phRange": "6.5 - 7.9",
            "pKa": "7.2"
        },
        {
            "name": "MOPS sodium salt",
            "casNo": "71119-22-7",
          "empiricalFormula": "C<sub>7</sub>H<sub>14</sub>NNaO<sub>4</sub>S",
            "formulaWeight": "231.25",
            "phRange": "6.5 - 7.9",
            "pKa": "7.2"
        },
        {
            "name": "MOPSO",
            "casNo": "68399-77-9",
          "empiricalFormula": "C<sub>7</sub>H<sub>15</sub>NO<sub>5</sub>S",
            "formulaWeight": "225.26",
            "phRange": "6.2 - 7.6",
            "pKa": "6.9"
        },
        {
            "name": "MOPSO sodium salt",
            "casNo": "79803-73-9",
          "empiricalFormula": "C<sub>7</sub>H<sub>14</sub>NNaO<sub>5</sub>S",
            "formulaWeight": "247.24",
            "phRange": "6.2 - 7.6",
            "pKa": "6.9"
        },
        {
            "name": "Periodic acid",
            "casNo": "10450-60-9",
            "empiricalFormula": "H<sub>5</sub>IO<sub>6</sub>",
            "formulaWeight": "227.94",
            "phRange": "0.64 - 2.64",
            "pKa": "1.64"
        },
        {
            "name": "PIPES",
            "casNo": "5625-37-6",
          "empiricalFormula": "C<sub>8</sub>H<sub>18</sub>N<sub>2</sub>O<sub>6</sub>S<sub>2</sub>",
            "formulaWeight": "302.37",
            "phRange": "6.1 - 7.5",
            "pKa": "7.1"
        },
        {
            "name": "PIPES dipotassium salt",
            "casNo": "108321-27-3",
          "empiricalFormula": "C<sub>8</sub>H<sub>16</sub>K<sub>2</sub>N<sub>2</sub>O<sub>6</sub>S<sub>2</sub>",
            "formulaWeight": "378.55",
            "phRange": "6.1 - 7.5",
            "pKa": "7.1"
        },
        {
            "name": "PIPES disodium salt",
            "casNo": "76836-02-7",
          "empiricalFormula": "C<sub>8</sub>H<sub>16</sub>N<sub>2</sub>Na<sub>2</sub>O<sub>6</sub>S<sub>2</sub>",
            "formulaWeight": "346.33",
            "phRange": "6.1 - 7.5",
            "pKa": "7.1"
        },
        {
            "name": "PIPES sesquisodium salt",
            "casNo": "100037-69-2",
          "empiricalFormula": "C<sub>8</sub>H<sub>16.5</sub>N<sub>2</sub>Na<sub>1.5</sub>O<sub>6</sub>S<sub>2</sub>",
            "formulaWeight": "335.34",
            "phRange": "6.1 - 7.5",
            "pKa": "7.1"
        },
        {
            "name": "PIPES sodium salt",
            "casNo": "10010-67-0",
          "empiricalFormula": "C<sub>8</sub>H<sub>17</sub>N<sub>2</sub>NaO<sub>6</sub>S<sub>2</sub>",
            "formulaWeight": "324.35",
            "phRange": "6.1 - 7.5",
            "pKa": "7.1"
        },
        {
            "name": "POPSO hydrate",
            "casNo": "68189-43-5 (anhydrous)",
            "empiricalFormula": "C<sub>10</sub>H<sub>22</sub>N<sub>2</sub>O<sub>8</sub>S<sub>2</sub> &#8226; xH<sub>2</sub>O",
            "formulaWeight": "362.42 (anhydrous basis)",
            "phRange": "7.2 - 8.5",
            "pKa": "7.8"
        },
        {
            "name": "Potassium acetate",
            "casNo": "127-08-2",
            "empiricalFormula": "C<sub>2</sub>H<sub>3</sub>KO<sub>2</sub>",
            "formulaWeight": "98.14",
            "phRange": "3.76 - 5.76",
            "pKa": "4.76"
        },
        {
            "name": "Potassium bicarbonate",
            "casNo": "298-14-6",
            "empiricalFormula": "CHKO<sub>3</sub>",
            "formulaWeight": "100.12",
            "phRange": "5.4-7.4",
            "pKa": "(1) 6.4 (2) 10.4"
        },
        {
            "name": "Potassium carbonate",
            "casNo": "584-08-7",
            "empiricalFormula": "CK<sub>2</sub>O<sub>3</sub>",
            "formulaWeight": "138.21",
            "phRange": "9.25 - 11.25",
            "pKa": "10.25"
        },
        {
            "name": "Potassium citrate tribasic monohydrate",
            "casNo": "6100-05-6",
            "empiricalFormula": "C<sub>6</sub>H<sub>5</sub>K<sub>3</sub>O<sub>7</sub> &#8226; H<sub>2</sub>O",
            "formulaWeight": "324.41",
            "phRange": "7.5 - 9.5",
            "pKa": "8.5"
        },
        {
            "name": "Potassium hydrogen phthalate",
            "casNo": "877-24-7",
            "empiricalFormula": "C<sub>8</sub>H<sub>5</sub>KO<sub>4</sub>",
            "formulaWeight": "204.22",
            "phRange": "4.4 - 6.4",
            "pKa": "5.4"
        },
        {
            "name": "Potassium phosphate dibasic",
            "casNo": "7758-11-4",
            "empiricalFormula": "HK<sub>2</sub>O<sub>4</sub>P",
            "formulaWeight": "174.18",
            "phRange": "11.4 - 13.4",
            "pKa": "12.4"
        },
        {
            "name": "Potassium phosphate dibasic trihydrate",
            "casNo": "16788-57-1",
          "empiricalFormula": "HK<sub>2</sub>O<sub>4</sub>P &#8226; 3H<sub>2</sub>O",
            "formulaWeight": "228.22",
            "phRange": "6.21 - 8.21",
            "pKa": "7.21"
        },
        {
            "name": "Potassium phosphate monobasic",
            "casNo": "7778-77-0",
            "empiricalFormula": "H<sub>2</sub>KO<sub>4</sub>P",
            "formulaWeight": "136.09",
            "phRange": "5.82-7.82",
            "pKa": "(1) 2.15"
        },
        {
            "name": "Potassium phosphate tribasic",
            "casNo": "7778-53-2",
            "empiricalFormula": "K<sub>3</sub>O<sub>4</sub>P",
            "formulaWeight": "212.27",
            "phRange": "0.6 - 2.6",
            "pKa": "1.6"
        },
        {
            "name": "Sodium acetate",
            "casNo": "127-09-3",
          "empiricalFormula": "C<sub>2</sub>H<sub>3</sub>NaO<sub>2</sub>",
            "formulaWeight": "82.03",
            "phRange": "3.75 - 5.75",
            "pKa": "4.75"
        },
        {
            "name": "Sodium acetate trihydrate",
            "casNo": "6131-90-4",
            "empiricalFormula": "C<sub>2</sub>H<sub>3</sub>NaO<sub>2</sub> &#8226; 3H<sub>2</sub>O",
            "formulaWeight": "136.08",
            "phRange": "3.75 - 5.75",
            "pKa": "4.75"
        },
        {
            "name": "Sodium bicarbonate",
            "casNo": "144-55-8",
            "empiricalFormula": "CHNaO<sub>3</sub>",
            "formulaWeight": "84.01",
            "phRange": "9.2-10.8",
            "pKa": "(1) 6.37"
        },
        {
            "name": "Sodium bitartrate monohydrate",
            "casNo": "6131-98-2",
            "empiricalFormula": "C<sub>4</sub>H<sub>5</sub>NaO<sub>6</sub> &#8226; H<sub>2</sub>O",
            "formulaWeight": "190.08",
            "phRange": "1.72 - 3.72",
            "pKa": "2.72"
        },
        {
            "name": "Sodium cacodylate trihydrate",
            "casNo": "6131-99-3",
          "empiricalFormula": "C<sub>2</sub>H<sub>6</sub>AsNaO<sub>2</sub> &#8226; 3H<sub>2</sub>O",
            "formulaWeight": "214.03",
            "phRange": "5.27 - 7.27",
            "pKa": "6.27"
        },
        {
            "name": "Sodium carbonate",
            "casNo": "497-19-8",
            "empiricalFormula": "CNa<sub>2</sub>O<sub>3</sub>",
            "formulaWeight": "105.99",
            "phRange": "5.35-7.35",
            "pKa": "pKa1=6.35 pKa2=10.33"
        },
        {
            "name": "Sodium citrate tribasic dihydrate",
            "casNo": "6132-04-3",
            "empiricalFormula": "HOC(COONa)(CH<sub>2</sub>COONa)<sub>2</sub> &#8226; 2H<sub>2</sub>O",
            "formulaWeight": "294.10",
            "phRange": "3.76-5.76",
            "pKa": "pKa1=3.13 pKa2=4.76 pKa3=6.4"
        },
        {
            "name": "Sodium phosphate dibasic",
            "casNo": "7558-79-4",
            "empiricalFormula": "HNa<sub>2</sub>O<sub>4</sub>P",
            "formulaWeight": "141.96",
            "phRange": "5.82-7.83",
            "pKa": "(1) 2.15"
        },
        {
            "name": "Sodium phosphate dibasic dihydrate",
            "casNo": "10028-24-7",
          "empiricalFormula": "HNa<sub>2</sub>O<sub>4</sub>P &#8226; 2H<sub>2</sub>O",
            "formulaWeight": "177.99",
            "phRange": "6.2-8.2",
            "pKa": "7.2"
        },
        {
            "name": "Sodium phosphate dibasic dodecahydrate",
            "casNo": "10039-32-4",
          "empiricalFormula": "HNa<sub>2</sub>O<sub>4</sub>P &#8226; 12H<sub>2</sub>O",
            "formulaWeight": "358.14",
            "phRange": "6.2 - 8.2",
            "pKa": "7.2"
        },
        {
            "name": "Sodium phosphate dibasic heptahydrate",
            "casNo": "7782-85-6",
            "empiricalFormula": "Na<sub>2</sub>HPO<sub>4</sub> &#8226; 7H<sub>2</sub>O",
            "formulaWeight": "268.07",
            "phRange": "5.8-8.0",
            "pKa": "pKa1=2.15 pKa2=7.20 pKa3= 12.33"
        },
        {
            "name": "Sodium phosphate monobasic",
            "casNo": "7558-80-7",
            "empiricalFormula": "H<sub>2</sub>NaO<sub>4</sub>P",
            "formulaWeight": "119.98",
            "phRange": "5.82-7.84",
            "pKa": "(1) 2.15"
        },
        {
            "name": "Sodium phosphate monobasic dihydrate",
            "casNo": "13472-35-0",
            "empiricalFormula": "H<sub>2</sub>NaO<sub>4</sub>P &#8226; 2H<sub>2</sub>O",
            "formulaWeight": "156.01",
            "phRange": "5.8-8.1",
            "pKa": "pKa1=2.15 pKa2=7.20 pKa3= 12.33"
        },
        {
            "name": "Sodium phosphate monobasic monohydrate",
            "casNo": "10049-21-5",
            "empiricalFormula": "H<sub>2</sub>NaO<sub>4</sub>P &#8226; H<sub>2</sub>O",
            "formulaWeight": "137.99",
            "phRange": "5.8-8.2",
            "pKa": "pKa1=2.15 pKa2=7.20 pKa3= 12.33"
        },
        {
            "name": "Sodium phosphate tribasic dodecahydrate",
            "casNo": "10101-89-0",
            "empiricalFormula": "Na<sub>3</sub>O<sub>4</sub>P &#8226; 12H<sub>2</sub>O",
            "formulaWeight": "380.12",
            "phRange": "5.8-8.3",
            "pKa": "pKa1=2.15 pKa2=7.20 pKa3= 12.33"
        },
        {
            "name": "Sodium pyrophosphate dibasic",
            "casNo": "7758-16-9",
            "empiricalFormula": "H<sub>2</sub>Na<sub>2</sub>O<sub>7</sub>P<sub>2</sub>",
            "formulaWeight": "221.94",
            "phRange": "5.8-7.4",
            "pKa": "pK1=0.91 pK2=2.10"
        },
        {
            "name": "Sodium pyrophosphate tetrabasic decahydrate",
            "casNo": "13472-36-1",
            "empiricalFormula": "Na<sub>4</sub>O<sub>7</sub>P<sub>2</sub> &#8226; 10H<sub>2</sub>O",
            "formulaWeight": "446.06",
            "phRange": "5.8-7.5",
            "pKa": "pK1=0.91 pK2=2.10 pK3=6.70 pK4=9.32"
        },
        {
            "name": "Sodium tartrate dibasic dihydrate",
            "casNo": "6106-24-7",
            "empiricalFormula": "C<sub>4</sub>H<sub>4</sub>Na<sub>2</sub>O<sub>6</sub> &#8226; 2H<sub>2</sub>O",
            "formulaWeight": "230.08",
            "phRange": "3.34-5.34",
            "pKa": "pK1=2.98 pK2=4.34"
        },
        {
            "name": "Sodium tetraborate decahydrate",
            "casNo": "1303-96-4",
            "empiricalFormula": "B<sub>4</sub>Na<sub>2</sub>O<sub>7</sub> &#8226; 10H<sub>2</sub>O",
            "formulaWeight": "381.37",
            "phRange": "8.23-10.23",
            "pKa": "pKa1=9.23 pKa2=12.74 pKa3=13.8"
        },
        {
            "name": "TAPS",
            "casNo": "29915-38-6",
          "empiricalFormula": "C<sub>7</sub>H<sub>17</sub>NO<sub>6</sub>S",
            "formulaWeight": "243.28",
            "phRange": "7.7 - 9.1",
            "pKa": "8.4"
        },
        {
            "name": "TAPS sodium salt",
            "casNo": "91000-53-2",
          "empiricalFormula": "C<sub>7</sub>H<sub>16</sub>NNaO<sub>6</sub>S",
            "formulaWeight": "265.26",
            "phRange": "7.7 - 9.1",
            "pKa": "8.4"
        },
        {
            "name": "TAPSO",
            "casNo": "68399-81-5",
          "empiricalFormula": "C<sub>7</sub>H<sub>17</sub>NO<sub>7</sub>S",
            "formulaWeight": "259.28",
            "phRange": "7.0 - 8.2",
            "pKa": "7.6"
        },
        {
            "name": "TES",
            "casNo": "7365-44-8",
          "empiricalFormula": "C<sub>6</sub>H<sub>15</sub>NO<sub>6</sub>S",
            "formulaWeight": "229.25",
            "phRange": "6.8 - 8.2",
            "pKa": "7.5"
        },
        {
            "name": "TES hemisodium salt",
            "casNo": "",
          "empiricalFormula": "C<sub>6</sub>H<sub>14.5</sub>NO<sub>6</sub>S &#8226; 0.5 Na",
            "formulaWeight": "240.24",
            "phRange": "6.8 - 8.2",
            "pKa": "7.5"
        },
        {
            "name": "TES sodium salt",
            "casNo": "70331-82-7",
          "empiricalFormula": "C<sub>6</sub>H<sub>14</sub>NNaO<sub>6</sub>S",
            "formulaWeight": "251.23",
            "phRange": "6.8 - 8.2",
            "pKa": "7.5"
        },
        {
            "name": "Tricine",
            "casNo": "5704-04-1",
          "empiricalFormula": "C<sub>6</sub>H<sub>13</sub>NO<sub>5</sub>",
            "formulaWeight": "179.17",
            "phRange": "7.4 - 8.8",
            "pKa": "(1) 2.023"
        },
        {
            "name": "Tricine",
            "casNo": "5704-04-1",
            "empiricalFormula": "C<sub>6</sub>H<sub>13</sub>NO<sub>5</sub>",
            "formulaWeight": "179.17",
            "phRange": "7.4 - 8.8",
            "pKa": "8.1"
        },
        {
            "name": "Triethanolamine hydrochloride",
            "casNo": "637-39-8",
          "empiricalFormula": "C<sub>6</sub>H<sub>15</sub>NO<sub>3</sub> &#8226; HCl",
            "formulaWeight": "185.65",
            "phRange": "7.3 - 8.3",
            "pKa": "7.8"
        },
        {
            "name": "Trizma(R) acetate",
            "casNo": "6850-28-8",
            "empiricalFormula": "C<sub>4</sub>H<sub>11</sub>NO<sub>3</sub> &#8226; CH<sub>3</sub>COOH",
            "formulaWeight": "181.19",
            "phRange": "5.76-7.06",
            "pKa": "pK1=8.06 pK2=4.76"
        },
        {
            "name": "Trizma(R) base",
            "casNo": "77-86-1",
          "empiricalFormula": "C<sub>4</sub>H<sub>11</sub>NO<sub>3</sub>",
            "formulaWeight": "121.14",
            "phRange": "7 - 9",
            "pKa": "8.1"
        },
        {
            "name": "Trizma(R) hydrochloride",
            "casNo": "1185-53-1",
          "empiricalFormula": "C<sub>4</sub>H<sub>11</sub>NO<sub>3</sub> &#8226; HCl",
            "formulaWeight": "157.6",
            "phRange": "7.0 - 9.0",
            "pKa": "8.1"
        },
        {
            "name": "Trizma(R) maleate",
            "casNo": "72200-76-1",
            "empiricalFormula": "NH<sub>2</sub>C(CH<sub>2</sub>OH)<sub>3</sub> &#8226; C<sub>4</sub>H<sub>4</sub>O<sub>4</sub>",
            "formulaWeight": "237.21",
            "phRange": "5.3-7.3",
            "pKa": "6.3"
        },
        {
            "name": "Trizma(R) phosphate monobasic",
            "casNo": "6992-39-8",
            "empiricalFormula": "C<sub>4</sub>H<sub>11</sub>NO<sub>3</sub> &#8226; H<sub>3</sub>PO<sub>4</sub>",
            "formulaWeight": "219.13",
            "phRange": "6.2-8.2",
            "pKa": "pK1=8.06 pK2=2.15 pk3=7.2 pk4=12.33"
        }
      ],
      selectedBufer:{},
      findByName: function(name) {
          return this.list.find(element=>element.name == name);
      },
      calculateBuffer: function(volume, volumeUnit, concentration, concentrationUnit) {
      
        var formulaWeight = this.selectedBufer.formulaWeight;
        var volumeUnitConvert = 1;
        if(volumeUnit == 'L') {
          volumeUnitConvert = 1;
        } else if(volumeUnit == 'mL') {
          volumeUnitConvert = 1000;
        } else if(volumeUnit == 'uL') {
          volumeUnitConvert = 1000000;
        } else {
          volumeUnitConvert = 1;
        }
      
        var concentrationUnitConvert = 1;
        if(concentrationUnit == 'M') {
          concentrationUnitConvert = 1;
        } else if(concentrationUnit == 'mM') {
          concentrationUnitConvert = 1000;
        } else if(concentrationUnit == 'nM') {
          concentrationUnitConvert = 1000000000;
        } else {
          concentrationUnitConvert = 1;
        }
      
        // check for empty fields
        if(this.selectedBufer.name =="" || this.selectedBufer.name == 'default') {
          return 'buffError';
        }
        if(!concentration) {
          return 'dcError';
        }
        if(!volume) {
          return 'dfvError';
        }
        if(!formulaWeight) {
          return 'fwError';
        }
      
        var mass = (concentration / concentrationUnitConvert) * (volume / volumeUnitConvert) * formulaWeight;
      
        return Number(mass.toFixed(2));
    }
      
} ;