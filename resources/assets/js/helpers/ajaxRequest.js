export function ajaxRequest(type, url, data, success, error) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content,
            'Content-Type': 'application/json'
        }
    });

    $.ajax({
        type: type,
        url: url,
        data: JSON.stringify(data),
        success: success,
        error: error
    });
}
