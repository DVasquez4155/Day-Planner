
        var maxHours = 9;
        var currentHour = moment().startOf('day').add(9, 'hours')
        var container = $('#container');
        function addHour() {
            currentHour.add(1, 'hours');
        }
        function newRow() {
            var row;
            if (true) {
                row = document.createElement('div');
                $(row).addClass('row');
                row = $(row);
                container.append(row);
            }
            var timeContainer = document.createElement('div');
            $(timeContainer)
            .addClass('col-auto text-right border-right border-top border-dark time-container')
            .html(currentHour.format('ha'));
            row.append(timeContainer);
            var inputContainer = document.createElement('input');
            var currentTime = moment().add('hour',13);
            var type = 'bg-secondary'
            if (currentTime.hour() < currentHour.hour()) {
                type = 'bg-success'
            }
            if (currentTime.hour() > currentHour.hour()) {
                type = 'bg-danger';
            }
            $(inputContainer)
            .addClass('col')
            .addClass(type)
            .attr('id', 'text-' + currentHour.hour())
            .val(values[currentHour.hour() - 9]);
            row.append(inputContainer);
            var button = document.createElement('button');
            $(button)
            .addClass('col-auto btn btn-info rounded-0')
            .html('Save')
            .attr('value', currentHour.hour())
            .on('click', function(e) {saveText(e)});
            row.append(button);
            addHour();
        }
        for (var i = 0; i < maxHours; i++) {
            newRow();
        }
        function saveText(e) {
            var value = e.target.value;
            var textBox = $('#text-' + value);
            values[value - 9] = textBox.val();
            updateValues(values);
        }
    