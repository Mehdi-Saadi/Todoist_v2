<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'task_id',
        'body',
        'attacked_file',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
