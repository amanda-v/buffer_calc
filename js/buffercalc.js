$(document).ready(function(){
    //bufferProducts object is defiend in bufferProductList.js
    bufferProducts.list && bufferProducts.list.map(function(elem){
        let tempElem = `<option data-index="0" value="${elem.name}">${elem.name}</option>`;
        $('#selectBuffer').append(tempElem);
    });
    $('#selectBuffer').change(function(event){
        bufferProducts.selectedBufer = bufferProducts.findByName(event.target.value);
        $('.bufferSelectedData').show();
        $('.bufferDataCas').html(bufferProducts.selectedBufer.casNo);
        $('.bufferDataMolecularFormula').html(bufferProducts.selectedBufer.empiricalFormula);
        $('.bufferDataPKA').html(bufferProducts.selectedBufer.pKa);
        $('.bufferDataPHRange').html(bufferProducts.selectedBufer.phRange);
        $('.bufferDataCas').html(bufferProducts.selectedBufer.formulaWeight);
        $('#inputBufferFW').val(bufferProducts.selectedBufer.formulaWeight);
    })
    $('#calculateBtn').on('click', function(){
        let finalVolume = $('#inputBufferDFV').val();
        let concentration = $('#inputBufferDC').val();
        let volumeUnit = $('#bufferDFVOption').val();
        let concentrationUnit = $('#bufferDCOption').val();
        let result = bufferProducts.calculateBuffer(finalVolume, volumeUnit, concentration, concentrationUnit);
        $('.error').hide();
        if (typeof result == 'number') {
            $('#resultBuffer').val(result);
            let resultText = `<p>
                <strong>Results based on your selection: </strong>
                </p>
                <p>
                    Your stock solution of <span class="bufferName">${bufferProducts.selectedBufer.name}</span> is calculated to be <span class="bufferConcentration">${concentration}</span> <span class="bufferConcentrationUnit"><strong>${concentrationUnit}</strong></span> based on the formula weight of <span class="bufferFormulaWeight">${bufferProducts.selectedBufer.formulaWeight}</span> g/mol.
                </p>

                <p>
                    To make a <span class="bufferConc"><strong>${concentration} ${concentrationUnit}</strong></span> solution, add <span class="bufferMass"></span> g of <span class="bufferName">${bufferProducts.selectedBufer.name}</span> to deionized water.
                </p>

                <p>
                    Adjust the final volume of the solution to <span class="bufferVolume"><strong>${finalVolume} ${volumeUnit}</strong></span> with deionized water.
                </p>
                <p>
                    Adjust the pH as needed
                </p>`;
            $('.bufferCalcResults').html(resultText);
            $('.bufferCalcResults').show();
        } else {
            $('.'+result).show();
        }
    })
    
    
})